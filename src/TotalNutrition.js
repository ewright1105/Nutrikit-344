// TotalNutrition.js
import React from 'react';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const TotalNutrition = ({ totalCalories, totalFat, totalSaturatedFat, totalTransFat, totalProtein, totalCarbohydrate }) => {
  // Function to determine if a value is considered "high"
  const isHighValue = (value, limit) => {
    return value > limit;
  };

  return (
    <Card className="total-nutrition">
      <CardBody>
        <CardTitle tag="h5">Total Nutrition</CardTitle>
        <ListGroup flush>
          <ListGroupItem>
            Total Calories: {totalCalories}
            {isHighValue(totalCalories, 2000) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Fat: {totalFat}g
            {isHighValue(totalFat, 50) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Saturated Fat: {totalSaturatedFat}g
            {isHighValue(totalSaturatedFat, 20) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Trans Fat: {totalTransFat}g
            {isHighValue(totalTransFat, 2) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Protein: {totalProtein}g
            {isHighValue(totalProtein, 100) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
          <ListGroupItem>
            Total Carbohydrate: {totalCarbohydrate}g
            {isHighValue(totalCarbohydrate, 300) && <span className="high-indicator"> High!!!</span>}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default TotalNutrition;
