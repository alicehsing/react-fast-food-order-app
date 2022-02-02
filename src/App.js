import { useState } from 'react';
import FoodImages from './FoodImages';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import DrinkDropdown from './DrinkDropdown';
import InstructionForm from './InstructionForm';
import InstructionsList from './InstructionsList';
import './App.css';

function App() {

  // track the state of foodId, sideId, drinkId. All start out as 1
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  // track the state of orderName
  const [orderName, setOrderName] = useState('valued customer');
  // an array of instructions
  const [instructions, setInstructions] = useState(['no pickles', 'extra mayo']);
  return (
    <div className="App">
      <header className="App-header"> 
      Welcome to Speedy Food! The No. 1 fast food restaurant in PDX!
      </header>
      <hr></hr>
      <div className="order-form">
        <NameInput setOrderName={setOrderName} />
        <br></br>
        <FoodDropdown setFoodId={setFoodId} />
        <SideDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <InstructionForm 
          instructions={instructions} 
          setInstructions={setInstructions} />
      </div>
      <div className="instruction-list">
        <InstructionsList instructions={instructions} />
      </div>
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
