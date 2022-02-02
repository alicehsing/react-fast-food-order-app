import React from 'react';

export default function FoodImages({ foodId, sideId, drinkId }) {
  return <div className="image-display">
    <img className="food-img" src={`food-${foodId}.webp`}/>
    <img className="food-img" src={`side-${sideId}.jpeg`}/>
    <img className="food-img" src={`drink-${drinkId}.webp`}/>
  </div>;
}
