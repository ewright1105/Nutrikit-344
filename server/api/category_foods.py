from flask import jsonify
from flask_restful import Resource
from api.nutrikit_db import get_category_foods


class CategoryFoods(Resource):
    def get(self, category):
       foods = get_category_foods(category)
       return jsonify(foods)
       
    