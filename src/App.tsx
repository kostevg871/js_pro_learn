// import { Main } from 'Containers/Main';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
