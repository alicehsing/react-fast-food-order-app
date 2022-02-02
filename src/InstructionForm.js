import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ setInstructions, instructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //the new instruction to add to: instructionInForm
    //change parent state: setInstructionInForm
    //we have the current array of instructions from parent state: instructions
    //use these three to add new instruction to the array in parent state. How? IMMUTABLY .push. Make a copy of the old array[...oldArray, newItem]
    setInstructions([...instructions, instructionInForm]);
  //reset form
    setInstructionInForm('');
  }

  return <form onSubmit={handleSubmit}>
    <label>
         Special Instructions:&nbsp;
      <input required value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
    </label>
    <button>Add Instruction</button>

  </form>;
}
