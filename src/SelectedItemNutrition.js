import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const SingleItemNutrition = ({ food }) => {
  const defaultFood = {
    name: 'No Food Selected',
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    protein: 0,
    carbohydrate: 0,
  };

  const [currentFood, setCurrentFood] = useState(defaultFood);

  const isHighValue = (value, limit) => {
    return value > limit;
  };

  useEffect(() => {
    setCurrentFood(food || defaultFood);
  }, [food]);

  return (
    <Card className="nutrition-label">
      <CardBody>
        <CardTitle tag="h5">{currentFood.name}</CardTitle>
        <ListGroup flush>
          <ListGroupItem>
            Calories: {currentFood.calories}
            {isHighValue(currentFood.calories, 400) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Fat: {currentFood.totalFat}g
            {isHighValue(currentFood.totalFat, 20) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Saturated Fat: {currentFood.saturatedFat}g
            {isHighValue(currentFood.saturatedFat, 5) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Trans Fat: {currentFood.transFat}g
            {isHighValue(currentFood.transFat, 2) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Protein: {currentFood.protein}g
            {isHighValue(currentFood.protein, 50) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Carbohydrate: {currentFood.carbohydrate}g
            {isHighValue(currentFood.carbohydrate, 50) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default SingleItemNutrition;
