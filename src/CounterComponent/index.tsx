import React from 'react';
import './counter.css';

type CounterProprsType = {
  title: string;
  count?: number;
};

export const CounterComponent = (props: CounterProprsType) => {
  const { count, title } = props;
  return (
    <div className="counter_wrapper">
      <h1>{title}</h1>
      <h2>{count} шт</h2>
    </div>
  );
};
