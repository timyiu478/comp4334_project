from database import db
from Crypto.Hash import SHA256
from datetime import datetime

class User(db.Model):
    __tablename__ = "User"

    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(255),unique=True)
    hs_password = db.Column(db.String(255)) # hashed and salted password
    salt = db.Column(db.String(255))
    public_key = db.Column(db.String(255))
    
    def check_password(self,password):
        b_pw = str.encode(password) # byte string
        b_pw = bytes.fromhex(self.salt) + b_pw
        h = SHA256.new(b_pw)
        return h.hexdigest() == self.hs_password

    def __init__(self,username,hs_password,salt,public_key):
        self.username = username
        self.hs_password = hs_password
        self.salt = salt
        self.public_key = public_key

class History(db.Model):
    __tablename__ = "History"

    id = db.Column(db.Integer,primary_key=True)
    from_username = db.Column(db.String(255),db.ForeignKey('User.username'))
    to_username = db.Column(db.String(255),db.ForeignKey('User.username'))
    data = db.Column(db.String(1024))
    datetime = db.Column(db.DateTime,default=datetime.utcnow)

    fun = db.relationship('User',foreign_keys="[History.from_username]")
    tun = db.relationship('User',foreign_keys="[History.to_username]")

    def __init__(self,from_username,to_username,data):
        self.from_username = from_username
        self.to_username = to_username
        self.data = data

    def __repr__(self):
        return {
            'id': self.id,
            'from_username': self.from_username,
            'to_username': self.to_username,
            'data': self.data,
            'datetime': self.datetime
        }