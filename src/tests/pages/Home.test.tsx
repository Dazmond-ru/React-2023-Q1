import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import Home from '../../pages/Home/Home'

import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux'
import store from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'

describe('Home Page', () => {
  test('Home functional', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )

    expect(screen.getByTestId('home')).toBeInTheDocument()

    expect(screen.getByTestId('management')).toBeInTheDocument()

    expect(await screen.findByTestId('resultList')).toBeInTheDocument()

    const card = screen.queryAllByTestId('card')
    expect(card[0]).toBeInTheDocument()

    await userEvent.type(screen.getByTestId('search-input'), 'rick')
    expect(screen.getByTestId('search-input')).toHaveValue('rick')

    await userEvent.click(card[0])
    waitFor(() => expect(screen.getByText('location')).toBeInTheDocument())
  })

  test('Home pagination', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )

    const input = screen.getByPlaceholderText('1/42')
    const prev = screen.getByTestId('prev')
    const next = screen.getByTestId('next')

    await userEvent.click(next)
    waitFor(() => expect(screen.getByPlaceholderText('2/42')).toBeInTheDocument())

    await userEvent.click(prev)
    waitFor(() => expect(screen.getByPlaceholderText('1/42')).toBeInTheDocument())

    await userEvent.type(input, '15')
    waitFor(() => expect(screen.getByPlaceholderText('15/42')).toBeInTheDocument())
  })
})
