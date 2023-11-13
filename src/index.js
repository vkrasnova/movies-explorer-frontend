import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { AuthProvider } from '../src/contexts/AuthProvider';
import { AppProvider } from './contexts/AppProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>

    <BrowserRouter>

      <AuthProvider>
        <AppProvider>

          <App />

        </AppProvider>
      </AuthProvider>

    </BrowserRouter>

  </StrictMode>
);
