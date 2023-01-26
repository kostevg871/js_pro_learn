import { CounterComponent } from 'Components/CounterComponent';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();

  const [label, setLabel] = useState('LABEL');
  useEffect(() => {
    console.log('MainContent MOUNT');
  }, []);

  useEffect(() => {
    console.log('MainContent UPDATE');
  }, [label]);

  //   const handler = () => console.log(`current label ${label}`);

  //   useEffect(() => {
  //     document.addEventListener('click', handler);

  //     return () => {
  //       document.removeEventListener('click', handler);
  //     };
  //   }, [label]);

  return (
    <main className={style.content}>
      <h1>Main Content</h1>

      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + '_UP')}>
        SetLabel
      </button>

      <div className={style.content}>
        <CounterComponent title={label} />
        <CounterComponent title="orange" />
      </div>
      <div className={style.btn_wrapper}>
        <button type="button" onClick={() => navigate(-1)}>
          go back
        </button>
        <button type="button" onClick={() => navigate(1)}>
          go next
        </button>
      </div>
    </main>
  );
};
