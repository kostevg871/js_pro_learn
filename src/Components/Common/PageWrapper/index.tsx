import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import style from './PageWrapper.module.scss';

type PageWraperProprs = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWraperProprs) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
