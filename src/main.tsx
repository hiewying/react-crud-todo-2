import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>,
)
