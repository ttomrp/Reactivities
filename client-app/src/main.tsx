import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreConext, store } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreConext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreConext.Provider>
  </React.StrictMode>,
)
