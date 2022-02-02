import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <section> Add Special Instructions: 
      {
        instructions.map((instruction, i) => 
          <Instruction key={`${instruction}-${i}`} instruction={instruction} />
        )}
    </section>
  );
}

