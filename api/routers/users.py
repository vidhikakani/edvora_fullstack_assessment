from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from schemas import user_schema
from services import services

router = APIRouter()

@router.post("/signup")
async def create_user(user: user_schema.UserCreate,
                      db: Session = Depends(services.get_database)):
    db_user = await services.get_user_by_email(email=user.email, db=db)

    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")

    user = await services.create_user(user=user, db=db)

    return await services.create_token(user=user)