import { routes } from 'Helpers/Constants/roustes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './PostsList.module.scss';

export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <p>POST1</p>
      <p>POST2</p>
      <p>POST3</p>
      <p>POST4</p>
      <p>POST5</p>
      <p>POST6</p>
      <p>POST7</p>
      <p>POST8</p>
      <p>POST9</p>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};
