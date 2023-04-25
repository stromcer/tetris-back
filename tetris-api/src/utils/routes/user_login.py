from src.database import User
from flask import jsonify
from flask_jwt_extended import create_access_token


def user_login(request_body):
    user = User.query.filter_by(email=request_body["email"]).first()
        
    if user == None and not user.check_password(request_body["password"]):
        return jsonify({"message":"user / password missmatch","code":"missmatch"}),404
    else:
        response = create_access_token(identity=user.serialize())
        return jsonify({"token":response, "message": "ok"}),200