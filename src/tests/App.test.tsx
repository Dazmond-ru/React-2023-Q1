import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom' // change this line
import App from '../App'
import React from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux'

test('App renders different pages based on routes', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )

  const homeLink = screen.getByRole('link', { name: 'Home' })
  const aboutLink = screen.getByRole('link', { name: 'About Us' })

  expect(homeLink).toBeInTheDocument()

  userEvent.click(aboutLink)

  expect(aboutLink).toBeInTheDocument()
})
