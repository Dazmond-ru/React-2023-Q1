import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import React from 'react'
import store from '../redux/store'
import withComponents from './testUtilities'

test('App renders different pages based on routes', () => {
  const AppComponent = withComponents(App, store)

  render(<AppComponent />)

  const homeLink = screen.getByRole('link', { name: 'Home' })
  const aboutLink = screen.getByRole('link', { name: 'About Us' })

  expect(homeLink).toBeInTheDocument()

  userEvent.click(aboutLink)

  expect(aboutLink).toBeInTheDocument()
})
