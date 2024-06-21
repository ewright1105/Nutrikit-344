import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';

const CalorieGoalTracker = ({ selectedItems }) => {
  const [totalCalorieGoal, setTotalCalorieGoal] = useState(2000); // Default calorie goal
  const [progress, setProgress] = useState(0); // Progress toward the calorie goal

  const calculateProgress = () => {
    const totalCaloriesSelected = selectedItems.reduce((total, item) => total + item["calories"], 0);
    const newProgress = (totalCaloriesSelected / totalCalorieGoal) * 100;
    setProgress(newProgress);
  };

  useEffect(() => {
    calculateProgress();
  }, [selectedItems, totalCalorieGoal]);

  return (
    <div>
      {/* Input field for setting the total calorie goal */}
      <div className="mb-3">
        <label htmlFor="calorieGoalInput" className="form-label">Set Total Calorie Goal:</label>
        <input
          type="number"
          id="calorieGoalInput"
          className="form-control"
          value={totalCalorieGoal}
          onChange={(e) => setTotalCalorieGoal(parseInt(e.target.value))}
        />
      </div>
      {/* Progress Bar to show the progress toward the calorie goal */}
      <Progress value={progress}>{progress.toFixed(2)}%</Progress>
    </div>
  );
};

export default CalorieGoalTracker;
