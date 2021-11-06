
from database import db
from Crypto.Hash import SHA256

class User(db.Model):
    __tablename__ = "User"

    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(255),unique=True)
    hs_password = db.Column(db.String(255)) # hashed and salted password
    salt = db.Column(db.String(255))

    def check_password(self,password):
        b_pw = str.encode(password) # byte string
        b_pw = bytes.fromhex(self.salt) + b_pw
        h = SHA256.new(b_pw)
        return h.hexdigest() == self.hs_password

    def __init__(self,username,hs_password,salt):
        self.username = username
        self.hs_password = hs_password
        self.salt = salt

