import React from 'react';
import DummyJson from './dummyJson/DummyJson';
import Ex1 from './ex/Ex1';
import Jsonplaceholder from './jsonplaceholder/Jsonplaceholder';
import Ex2 from './ex/Ex2';
import NewsList from './newsApi/NewsList';
import Ex4 from './ex/Ex4';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './newsApi/NewsPage';
import Ex5 from './ex/Ex5';
import Ex5_resolve from './ex/Ex5_resolve';
import Ex6 from './ex/Ex6';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
      <Route path="/ex6" element={<Ex6 />} />
      {/* <Route path="/" element={<Ex5_resolve />} />
      <Route path="/:category" element={<Ex5_resolve />} /> */}
    </Routes>
  );
};

export default App;
