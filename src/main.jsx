import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter.jsx'
import { AppTheme } from './theme/AppTheme.jsx'
import { store } from './store'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </React.StrictMode>,
)
