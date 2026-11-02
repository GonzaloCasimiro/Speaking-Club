import 'bootstrap/dist/css/bootstrap.min.css'; //para usar el btrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // menu
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)