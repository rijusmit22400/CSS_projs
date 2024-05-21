from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
engine = create_engine(f'mysql://riju:$whiteknight28@localhost/krsr_store', echo = True)

import mysql
conn = engine.connect()
session = sessionmaker(bind = conn)

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String(255))
    full_name = Column(String(255))
    password = Column(String(255))
    role = Column(String(255)) 
    email = Column(String(255))

class Customer(Base):
    __tablename__ = 'customer'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, unique=True)
    contact = Column(String(10))
    address = Column(String(255))