import React from 'react';

export default function SideDropdown({ setSideId }) {

  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <select onChange={handleChange} style={{ backgroundColor: '#fde4cf', width: 100, borderRadius: 10 }}>
    <option value="1">Garlic Fries</option>
    <option value="2">Tater Tots</option>
    <option value="3">Salad</option>
  </select>;
}