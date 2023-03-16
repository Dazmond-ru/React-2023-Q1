import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../../components/SearchBar/SearchBar'

describe('SearchBar component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should render correctly', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should update the input value on change', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(/search/i)
    await userEvent.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  test('should store the input value in localStorage on unmount', async () => {
    const { unmount } = render(<SearchBar />)
    const input = screen.getByPlaceholderText(/search/i)
    await userEvent.type(input, 'hello')
    expect(localStorage.getItem('searchValue')).toBeNull()

    unmount()
    expect(localStorage.getItem('searchValue')).toBe('hello')
  })

  test('should restore the input value from localStorage on mount', () => {
    localStorage.setItem('searchValue', 'hello')
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(/search/i)
    expect(input).toHaveValue('hello')
  })
})
