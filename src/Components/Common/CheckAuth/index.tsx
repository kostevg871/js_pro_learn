import { routes } from 'Helpers/Constants/roustes';
import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { UserSelectors } from 'Store';

type CheckAuthPropsType = {
  children: ReactNode;
};

export const CheckAuth: FC<CheckAuthPropsType> = ({ children }) => {
  const token = useSelector(UserSelectors.getUserToken);
  if (!token) {
    return <Navigate to={routes.auth} />;
  }

  return <>{children}</>;
};
