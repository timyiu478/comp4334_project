from database import db
from Crypto.Hash import SHA256

class User(db.Model):
    __tablename__ = "User"

    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(255),unique=True)
    hs_password = db.Column(db.String(255)) # hashed and salted password
    salt = db.Column(db.String(255))
    public_key = db.Column(db.String(255))
    history = db.relationship('History', backref='history', lazy=True)

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

class History(db.model):
    __tablename__ = "History"

    id = db.Column(db.Integer,primary_key=True)
    from_username = db.Column(db.String(255),db.ForeignKey('user.username'))
    to_username = db.Column(db.String(255),db.ForeignKey('user.username'))
    data = db.Column(db.String(4096))
    datetime = db.Column(db.Datetime())

    def __init__(self,from_username,to_username,data,datetime):
        self.from_username = from_username
        self.to_username = to_username
        self.data = data
        self.datetime = datetime