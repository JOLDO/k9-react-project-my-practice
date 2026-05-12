import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExFinalList from './ExFinalList';
import ExFinalContainer from './ExFinalContainer';

const ExFinalApp = () => {
  return (
    <Routes>
      <Route path="/" element={<ExFinalContainer />} />
      <Route path="/:page" element={<ExFinalContainer />} />
    </Routes>
  );
};

export default ExFinalApp;
