import React, { useState, useEffect } from 'react';
import './App.css';
import TotalNutrition from './TotalNutrition';
import CategorySelector from './CategorySelector';
import FoodSelector from './FoodSelector';
import Selections from './Selections';
import SingleItemNutrition from './SelectedItemNutrition';
import EditFoodFormModal from './EditFoodFormModal';
import CalorieGoalTracker from './CalorieGoalTracker';
import { Container, Row, Col, Button } from 'reactstrap';

function App() {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:4949/')
      .then(response => response.json())
      .then(data => {
        setFoodsData(data);
      })
      .catch(error => {
        console.error('Error fetching foods data:', error);
      });
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);
  const [category, setCategory] = useState('');
  const [foodsSelect, setFoodsSelect] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalSaturatedFat, setTotalSaturatedFat] = useState(0);
  const [totalTransFat, setTotalTransFat] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(0);
  const [isAddMode, setIsAddMode] = useState(true);
  const [currentEvent, setCurrentEvent] = useState();
  const [lastSelectedItem, setLastSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Update the food prop of SingleItemNutrition whenever lastSelectedItem changes
    if (lastSelectedItem) {
      setFoodsSelect(foodsData.filter(food => food.category === parseInt(category)));
    }
  }, [lastSelectedItem, foodsData, category]);

  const handleSelectionChangeAdd = (event) => {
    setIsAddMode(true);
    const selectedFood = foodsData.find(food => food["name"] === event.target.value);
    setLastSelectedItem(selectedFood);
    setCurrentEvent(event);
  }

  const handleSelectionChangeRemove = (event) => {
    setIsAddMode(false);
    const selectedFood = selectedItems.find(food => food["name"] === event.target.value);
    setLastSelectedItem(selectedFood);
    setCurrentEvent(event);
  }

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
    setFoodsSelect(foodsData.filter(food => food.category === parseInt(category)));
  };

  const handleFoodSelectionAdd = (event) => {
    if (isAddMode) {
      const foodName = event.target.value;
      const selectedFood = foodsSelect.find(food => food["name"] === foodName);
      setSelectedItems(prevSelectedItems => {
        const newSelectedItems = [...prevSelectedItems, selectedFood];
        calculateTotal(newSelectedItems);
        setLastSelectedItem(selectedFood);
        return newSelectedItems;
      });
    }
  };

  const handleFoodSelectionRemove = (event) => {
    if (!isAddMode) {
      const foodName = event.target.value;
      setSelectedItems(prevSelectedItems => {
        const index = prevSelectedItems.findIndex(item => item.name === foodName);
        if (index !== -1) {
          const newSelectedItems = [...prevSelectedItems];
          newSelectedItems.splice(index, 1);
          calculateTotal(newSelectedItems);
          return newSelectedItems;
        }
        return prevSelectedItems;
      });
    }
  }

  const handleFoodEdit = (formData) => {
    const updatedFood = {
      id: parseInt(formData.get('id')),
      name: formData.get('name'),
      calories: parseFloat(formData.get('calories')),
      totalFat: parseFloat(formData.get('totalFat')),
      saturatedFat: parseFloat(formData.get('saturatedFat')),
      transFat: parseFloat(formData.get('transFat')),
      protein: parseFloat(formData.get('protein')),
      carbohydrate: parseFloat(formData.get('carbohydrate'))
    };
  
    // Filter the foodsData array to get the category of foods to update
    const updatedCategory = foodsData.filter(food => food.category === category);
    
    const updatedFoodsData = updatedCategory.map(food => {
      if (food.id === updatedFood.id) {
        return updatedFood;
      }
      return food;
    });
  
    const newFoodsData = foodsData.map(food => {
      if (food.category === category) {
        return updatedFoodsData.find(updatedFood => updatedFood.id === food.id) || food;
      }
      return food;
    });
  
    setFoodsData(newFoodsData);
  
    const updatedSelectedItems = selectedItems.map(item => {
      if (item.id === updatedFood.id) {
        return updatedFood;
      }
      return item;
    });
  
    setSelectedItems(updatedSelectedItems);
    setLastSelectedItem(updatedFood);
    calculateTotal(updatedSelectedItems);

    const updatedFoodsSelect = foodsSelect.map(food => {
      if (food["id"] === updatedFood["id"]) {
        return updatedFood;
      }
      return food;
    }
    );
    setFoodsSelect(updatedFoodsSelect);
  };
  

  const calculateTotal = (selectedItems) => {
    const totalCalories = selectedItems.reduce((total, item) => total + parseInt(item["calories"]), 0);
    const totalFat = selectedItems.reduce((total, item) => total + parseInt(item["totalFat"]), 0);
    const totalSaturatedFat = selectedItems.reduce((total, item) => total + parseInt(item["saturatedFat"]), 0);
    const totalTransFat = selectedItems.reduce((total, item) => total + parseInt(item["transFat"]), 0);
    const totalProtein = selectedItems.reduce((total, item) => total + parseInt(item["protein"]), 0);
    const totalCarbohydrate = selectedItems.reduce((total, item) => total + parseInt(item["carbohydrate"]), 0);


    setTotalCalories(totalCalories);
    setTotalFat(totalFat);
    setTotalSaturatedFat(totalSaturatedFat);
    setTotalTransFat(totalTransFat);
    setTotalProtein(totalProtein);
    setTotalCarbohydrate(totalCarbohydrate);
  };


  return (
    <Container fluid className="mt-3">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to NutriKit!</h1>
        </Col>
      </Row>
      <Row className="my-3 justify-content-center">
        <Col xs={12} md={6}>
          <CalorieGoalTracker selectedItems={selectedItems} />
        </Col>
      </Row>
      <Row className="my-3 justify-content-center">
      <Col xs={6} md={3}>
          <CategorySelector onChange={handleCategoryChange} />
        </Col>
        <Col xs={6} md={3}>
          <FoodSelector onChange={handleSelectionChangeAdd} foods={foodsSelect} />
        </Col>
        <Col xs={6} md={3}>
          <EditFoodFormModal 
            isOpen={modalOpen}
            toggle={() => setModalOpen(!modalOpen)}
            lastSelectedItem={lastSelectedItem}
            onSubmit={handleFoodEdit}
          />
          <Button className='my-3'  block onClick={() => handleFoodSelectionAdd(currentEvent)}>Add Food</Button>
          <Button  className='my-3'block  onClick={() => handleFoodSelectionRemove(currentEvent)}>Remove Food</Button>
        </Col>
        <Col xs={6} md={3}>
        <Selections selectedItems={selectedItems.map(item => item["name"])} onRemove={handleSelectionChangeRemove} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Nutrition Summary</h2>
        </Col>
      </Row>
      <Row className="my-3 justify-content-center">
        <Col>
          <TotalNutrition
            totalCalories={totalCalories}
            totalFat={totalFat}
            totalSaturatedFat={totalSaturatedFat}
            totalTransFat={totalTransFat}
            totalProtein={totalProtein}
            totalCarbohydrate={totalCarbohydrate}
          />
        </Col>
        <Col>
          {<SingleItemNutrition food={lastSelectedItem} />}
        </Col>
      </Row>
    </Container>
  );
  
  
}

export default App;
