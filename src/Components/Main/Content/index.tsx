import { CounterComponent } from 'Components/CounterComponent';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();

  return (
    <main className={style.content}>
      <h1>Main Content</h1>

      <div className={style.content}>
        <CounterComponent title="apple" />
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
