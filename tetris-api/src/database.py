from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)
    password = db.Column(db.String, nullable=False)
    
    def checkPassword(self, password):
        return self.password == password
    
    def __repr__(self) -> str:
        return self.username
    
    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "email":self.email
        }