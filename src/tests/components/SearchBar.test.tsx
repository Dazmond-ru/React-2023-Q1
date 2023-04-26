import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../../components/SearchBar/SearchBar'
import store from '../../redux/store'
import withComponents from '../testUtilities'

describe('SearchBar component', () => {
  const SearchBarComponent = withComponents(SearchBar, store)

  test('should render correctly', () => {
    render(<SearchBarComponent />)

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should update the input value on change', async () => {
    render(<SearchBarComponent />)
    const input = screen.getByPlaceholderText(/search/i)
    await userEvent.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })
})
