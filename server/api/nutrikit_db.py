##file to hold all the database functions
from api.swen_344_db_utils import *

def get_all_foods():
    foods = exec_get_all("SELECT * FROM foods")
    food_list = []
    for food_row in foods:
        food = {
            "id": food_row[0],
            "name": food_row[1],
            "category": food_row[2],
            "calories": food_row[3],
            "totalFat": food_row[4],
            "saturatedFat": food_row[5],
            "transFat": food_row[6],
            "protein": food_row[7],
            "carbohydrate": food_row[8]
        }
        food_list.append(food)
    return food_list


def get_category_foods(category_id):
    sql = "Select * FROM foods WHERE category_id = %s"
    result = exec_get_all(sql, (category_id,))
    food_list = []
    for food_row in result:
        food = {
            "id": food_row[0],
            "name": food_row[1],
            "category": food_row[2],
            "calories": food_row[3],
            "totalFat": food_row[4],
            "saturatedFat": food_row[5],
            "transFat": food_row[6],
            "protein": food_row[7],
            "carbohydrate": food_row[8]
        }
        food_list.append(food)
    return food_list

def update_food(id, name, calories, totalFat, saturatedFat, transFat, protein, carbohydrate):
    sql = "UPDATE foods SET name = %s, calories = %s, totalFat = %s, saturatedFat = %s, transFat = %s, protein = %s, carbohydrate = %s WHERE id = %s"
    result = exec_commit(sql, name, calories, totalFat, saturatedFat, transFat, protein, carbohydrate, id)
    return result

def add_food(category, name, calories, totalFat, saturatedFat, transFat, protein, carbohydrate):
    sql = "INSERT INTO foods (name, calories, totalFat, saturatedFat, transFat, protein, carbohydrate) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    result = exec_commit(sql, category, name, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)
    return result

def delete_food( id):
    sql = "DELETE FROM foods WHERE id = %s"
    result = exec_commit(sql, id)
    return result

def get_categories():
    categories = exec_get_all("SELECT * FROM categories")
    cat_list = []
    for cat_row in categories:
        food = {
            "id": cat_row[0],
            "name": cat_row[1],
        }
        cat_list.append(food)
    return cat_list

def get_category_id(name):
    sql = "SELECT id FROM categories WHERE name = %s"
    result = exec_get_one(sql, (name,))
    return result
