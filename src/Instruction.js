import React from 'react';

export default function Instruction({ instruction }) {
  return <div className="instruction">
    {`'${instruction}'`}
  </div>;
}
