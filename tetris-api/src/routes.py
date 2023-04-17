from flask import Flask, request, jsonify, url_for, Blueprint
from database import db, User


api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    get_body = request.json
    
    query_user = User.query.filter_by(username=get_body["username"]).first_or_404()
    
    response = ""
    
    if query_user.checkPassword(get_body["password"]):
        response = "Login ok"
    
    else:
        response = "Login Failed"
        
    
    return jsonify(response)