import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom' // change this line
import App from '../App'
import React from 'react'

test('App renders different pages based on routes', () => {
  render(<App />, { wrapper: MemoryRouter })

  expect(screen.getByText('Home')).toBeInTheDocument()

  userEvent.click(screen.getByText('About Us'))

  expect(screen.getByText('About Us')).toBeInTheDocument()
})
