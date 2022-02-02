import { useState } from 'react';
import FoodImages from './FoodImages';
import './App.css';

function App() {

  // track the state of foodId, sideId, drinkId. All start out as 1
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  // track the state of orderName
  const [orderName, setOrderName] = useState('Murphy');
  // an array of instructions
  const [instructions, setInstructions] = useState(['no pickles', 'extra mayo']);
  return (
    <div className="App">
      <header className="App-header"> 
      Welcome to Speedy Food! The No. 1 fast food restaurant in PDX!
      </header>
      <div>
        <h3>Order for: {orderName}</h3>
        <FoodImages 
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />
      </div>

    </div>
  );
}

export default App;
