import React from 'react';

export default function NameInput({ setOrderName }) {
    

  return <div className="name-input"> Order Name:&nbsp;
    <input onChange={(e) => setOrderName(e.target.value)} />
  </div>;
}
