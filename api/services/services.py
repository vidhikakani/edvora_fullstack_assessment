from fastapi import HTTPException
from sqlalchemy.orm import Session
import email_validator
import passlib.hash as hash
from jwt import encode, decode

from database import database
from models import models
from schemas import user_schema

JWT_SECRET = "edvorafullstackassessmentsecretjwtkey"

def create_database():
    return database.Base.metadata.create_all(bind=database.engine)

def get_database():
    db = database.SessionLocal()
    try:
        yield db
    except Exception as e:
        print("Unable to get db: ", e)
    finally:
        db.close()

async def get_user_by_email(email: str, db: Session):
    return db.query(models.User).filter(models.User.email == email).first()

async def create_user(user: user_schema.UserCreate, db: Session):
    try:
        valid = email_validator.validate_email(email=user.email)
        email = valid.email
    except email_validator.EmailNotValidError:
        raise HTTPException(status_code=400, detail="Please enter a valid email")

    hashed_password = hash.bcrypt.hash(user.password)
    user_obj = models.User(first_name=user.first_name, 
                            last_name=user.last_name, 
                            email=email, 
                            hashed_password=hashed_password)

    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


async def create_token(user: models.User):
    user_schema_obj = user_schema.User.from_orm(user)
    user_dict = user_schema_obj.dict()
    del user_dict["created_at"]

    token = encode(user_dict, JWT_SECRET)
    return dict(access_token=token, token_type="bearer")
