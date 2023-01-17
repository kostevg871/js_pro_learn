import React, { ChangeEvent, useState } from 'react';
import './input.css';

export const Input = () => {
  const [value, setValue] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="input_wrapper">
      <h3>{`INPUT VALUE ${value}`}</h3>
      <input value={value} className="input" onChange={changeHandler} />
    </div>
  );
};
