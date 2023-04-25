import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'
import React from 'react'

export function render(url: string, options: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  )
  return stream
}
