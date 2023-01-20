import { routes } from 'Helpers/Constants/roustes';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();

  //   const location = useLocation();

  return (
    <main className={style.content}>
      <h1>Main Content</h1>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        go next
      </button>
    </main>
  );
};
