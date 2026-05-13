import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ch15/App';
import FinalApp from './ch13/ex/FinalApp';
import { BrowserRouter } from 'react-router-dom';
import ExFinalApp from './ch14/ex/ExFinalApp';
import ContextApp from './ch15/ex/ContextApp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <ContextApp />
    {/* <FinalApp /> */}
    {/* <ExFinalApp /> */}
  </BrowserRouter>,
);
