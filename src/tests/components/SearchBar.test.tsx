import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../../components/SearchBar/SearchBar'
import { vi } from 'vitest'

describe('SearchBar component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should render correctly', () => {
    render(<SearchBar onSearch={() => {}} />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should update the input value on change', async () => {
    render(<SearchBar onSearch={() => {}} />)
    const input = screen.getByPlaceholderText(/search/i)
    await userEvent.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  test('should restore the input value from localStorage on mount', () => {
    localStorage.setItem('searchValue', 'hello')
    render(<SearchBar onSearch={() => {}} />)
    const input = screen.getByPlaceholderText(/search/i)
    expect(input).toHaveValue('hello')
  })

  test('should call onSearch with correct value when form is submitted', async () => {
    const onSearchMock = vi.fn()
    render(<SearchBar onSearch={onSearchMock} />)
    const input = screen.getByPlaceholderText(/search/i)
    const searchValue = 'test value'
    await userEvent.type(input, searchValue)
    await userEvent.click(screen.getByRole('button'))
    expect(onSearchMock).toHaveBeenCalledWith(searchValue)
  })
})
