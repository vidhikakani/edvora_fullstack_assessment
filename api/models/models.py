import datetime as dt
from sqlalchemy import Column, Integer, String, DateTime
import passlib.hash as hash

from database import database

class User(database.Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    created_at = Column(DateTime, default=dt.datetime.utcnow)

    def verify_password(self, password: str):
        return hash.bcrypt.verify(password, self.hashed_password)