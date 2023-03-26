import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom' // change this line
import App from '../App'
import React from 'react'

test('App renders different pages based on routes', () => {
  render(<App />, { wrapper: MemoryRouter })

  const homeLink = screen.getByRole('link', { name: 'Home' })
  const aboutLink = screen.getByRole('link', { name: 'About Us' })

  expect(homeLink).toBeInTheDocument()

  userEvent.click(aboutLink)

  expect(aboutLink).toBeInTheDocument()
})
