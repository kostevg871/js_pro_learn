import { routes } from 'Helpers/Constants/roustes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <nav>
        <ul>
          <li>
            <Link to={routes.main}>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to={routes.posts}>ПОСТЫ</Link>
          </li>
          <li>
            <Link to={routes.notFound}>О НАС</Link>
          </li>
        </ul>
      </nav>
      <Link to={routes.auth}>Авторизация</Link>
    </header>
  );
};
