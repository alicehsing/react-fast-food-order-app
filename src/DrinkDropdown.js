import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {

  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return <select onChange={handleChange} style={{ backgroundColor: '#fde4cf', width: 100, borderRadius: 10 }}>
    <option value="1">Ice Tea</option>
    <option value="2">Ice Coffee</option>
    <option value="3">Orange</option>
  </select>;
}