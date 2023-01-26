import React, { useEffect, useState } from 'react';
import './counter.css';

type CounterProprsType = {
  title: string;
  count?: number;
};

const Counter = (props: CounterProprsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('CounterComponent MOUNT');
  }, []);

  useEffect(() => {
    console.log('CounterComponent UPDATE');
    return () => console.log('CounterComponent WILL_UPDATE');
  }, [count]);

  const incremetHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="counter_wrapper">
      <h1>{title}</h1>
      <div className="counter_group">
        <button disabled={count === 0} onClick={decrementHandler}>
          remove
        </button>
        <h2>{count} шт</h2>
        <button onClick={incremetHandler}>add</button>
      </div>
    </div>
  );
};

export const CounterComponent = React.memo(Counter);
