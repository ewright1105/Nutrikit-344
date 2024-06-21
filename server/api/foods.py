from flask import jsonify
from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from api.swen_344_db_utils import *
from api.nutrikit_db import *

class Foods(Resource):
    def get(self):
        #function that gets all the food from the database and returns it in a list of json objects
        foods = get_all_foods()
        return jsonify(foods)
    
    def put(self):
        data = request.get_json()
        result = update_food(data["category"], data["id"], data["name"], data["calories"], data["totalFat"], data["saturatedFat"], data["transFat"], data["protein"], data["carbohydrate"])
        return jsonify(result)
        
    def post(self):
        data = request.get_json()
        result = add_food(data["category"], data["name"], data["calories"], data["totalFat"], data["saturatedFat"], data["transFat"], data["protein"], data["carbohydrate"])
        return jsonify(result)
    
    def delete(self):
        data = request.get_json()
        result = delete_food(data["category"], data["id"])
        return jsonify(result)

