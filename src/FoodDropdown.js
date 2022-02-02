import React from 'react';

export default function FoodDropdown({ setFoodId }) {

  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return <select onChange={handleChange} style={{ backgroundColor: '#fde4cf', width: 100, borderRadius: 10 }}>
    <option value="1">Hamburger</option>
    <option value="2">Fried Chicken</option>
    <option value="3">Pizza</option>
  </select>;
}
