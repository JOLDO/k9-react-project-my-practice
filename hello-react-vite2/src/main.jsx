import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ch13/App';
import FinalApp from './ch13/ex/FinalApp';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <FinalApp />
  </BrowserRouter>,
);
