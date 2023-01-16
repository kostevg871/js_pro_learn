import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';

function App() {
  const handler = () => {
    console.log('Кнопка была нажата');
  };
  return (
    <div className="App">
      <CounterComponent title={'Апельсин'} count={8} />
      <CounterComponent title={'Арбуз'} count={4} />
      <CounterComponent title={'Мандаринки'} count={20} />
      <div onClickCapture={() => console.log('div')}>
        <p onClickCapture={() => console.log('p')}>
          <button onClick={handler}>PUSH ME</button>
        </p>
      </div>
    </div>
  );
}

export default App;
