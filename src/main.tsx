import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const script = document.createElement('script');
script.src = 'https://telegram.org/js/telegram-web-app.js';

script.onload = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

document.head.appendChild(script);