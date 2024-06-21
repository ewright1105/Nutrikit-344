from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from api.swen_344_db_utils import *
from api.foods import *
from api.categories import *
from api.category_foods import *

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

api.add_resource(Foods,'/')
api.add_resource(Categories,'/categories')
api.add_resource(CategoryFoods,'/category/<category>/foods') #category is actually the category id

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('nutrikit.sql');
    print("Starting flask");
    app.run(debug=True, port=4949) #starts Flask



    