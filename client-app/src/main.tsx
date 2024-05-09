import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import { StoreConext, store } from './app/stores/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreConext.Provider value={store}>
      <App />
    </StoreConext.Provider>
  </React.StrictMode>,
)
