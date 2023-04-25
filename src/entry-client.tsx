import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

import store from './redux/store'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
