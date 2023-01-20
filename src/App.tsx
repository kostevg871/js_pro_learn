import React from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/roustes';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
    </Routes>
  );
}

export default App;
