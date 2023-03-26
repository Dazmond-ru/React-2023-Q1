import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../../components/Form/Form'
import userEvent from '@testing-library/user-event'

describe('Form Component', () => {
  test('renders Form', () => {
    render(<Form />)

    const element = screen.getByTestId('form')
    expect(element).toBeInTheDocument()
  })

  test('user must enter name, created, status, image', () => {
    render(<Form />)

    fireEvent.click(screen.getByTestId('confirmInput'))
    fireEvent.click(screen.getByTestId('submit'))
    expect(screen.getByText(/Please enter name!/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter created date!/i)).toBeInTheDocument()
    expect(screen.getByText(/Please choose status!/i)).toBeInTheDocument()
    expect(screen.getByText(/Please add an image!/i)).toBeInTheDocument()
  })

  test('name must be start with a capital letter', async () => {
    render(<Form />)

    await userEvent.type(screen.getByTestId('nameInput'), 'name')
    fireEvent.click(screen.getByTestId('submit'))
    expect(screen.getByText(/Your name should start with a capital letter!/i)).toBeInTheDocument()
  })

  test('name must be more than 4 letters', async () => {
    render(<Form />)

    await userEvent.type(screen.getByTestId('nameInput'), 'nam')
    fireEvent.click(screen.getByTestId('submit'))
    expect(screen.getByText(/Your name must be more than 4 letters!/i)).toBeInTheDocument()
  })

  test('user must confirm', async () => {
    render(<Form />)

    await userEvent.type(screen.getByTestId('nameInput'), 'Name')
    fireEvent.click(screen.getByTestId('submit'))
    expect(screen.getByText(/Confirm if you are agree with!/i)).toBeInTheDocument()
  })

  test('checks if submit button is disabled', () => {
    render(<Form />)

    expect(screen.getByTestId('submit')).toBeDisabled()
  })
})
