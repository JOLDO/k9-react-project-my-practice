import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ch14/App';
import FinalApp from './ch13/ex/FinalApp';
import { BrowserRouter } from 'react-router-dom';
import ExFinalApp from './ch14/ex/ExFinalApp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <FinalApp /> */}
    <ExFinalApp />
  </BrowserRouter>,
);
