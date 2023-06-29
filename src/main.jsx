import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter.jsx'
import { AppTheme } from './theme/AppTheme.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </React.StrictMode>,
)
