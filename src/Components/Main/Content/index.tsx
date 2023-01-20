import React from 'react';
import { Link } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  return (
    <main className={style.content}>
      <h1>Main Content</h1>
      <Link to="/posts">go to posts</Link>
    </main>
  );
};
