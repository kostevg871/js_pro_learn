import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';

function App() {
  return (
    <div className="App">
      <CounterComponent title={'Апельсин'} count={8} />
      <CounterComponent title={'Арбуз'} count={4} />
      <CounterComponent title={'Мандаринки'} count={20} />
    </div>
  );
}

export default App;
