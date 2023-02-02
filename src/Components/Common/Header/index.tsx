/* eslint-disable multiline-ternary */
import { routes } from 'Helpers/Constants/roustes';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserSelectors, UserSliceAction } from 'Store';
import style from './Header.module.scss';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(UserSliceAction.clearUserData());
  };

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
      {userEmail ? (
        <div>
          <span className={style.name}>{userEmail}</span>
          <button type={'button'} onClick={logoutHandler}>
            logout
          </button>
        </div>
      ) : (
        <Link to={routes.auth}>Авторизация</Link>
      )}
    </header>
  );
};
