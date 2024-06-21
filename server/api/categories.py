from flask import jsonify
from flask_restful import Resource
from api.nutrikit_db import *

class Categories(Resource):
    def get(self):
        categories = get_categories()
        return categories

