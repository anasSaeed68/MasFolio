import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/globals.css';
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackUI } from './features/home/components/FallbackUI';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
    FallbackComponent={FallbackUI}
    onError={(error, info) => {console.error("Caught by ErrorBounday:", error, info);}}
    >
      <App />
    </ErrorBoundary>
    
  </StrictMode>,
)
