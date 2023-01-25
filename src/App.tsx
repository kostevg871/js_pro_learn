import React, { useEffect } from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/roustes';
import { NotFound } from 'Containers/NotFound';

function App() {
  useEffect(() => {
    console.log('APP MOUNT');
  }, []);

  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
