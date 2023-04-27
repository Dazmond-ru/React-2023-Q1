import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import Home from '../../pages/Home/Home'

import userEvent from '@testing-library/user-event'

import store from '../../redux/store'
import withComponents from '../testUtilities'

describe('Home Page', () => {
  const HomeComponent = withComponents(Home, store)
  test('Home functional', async () => {
    render(<HomeComponent />)

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
    render(<HomeComponent />)

    const prev = screen.getByTestId('prev')
    const next = screen.getByTestId('next')

    await userEvent.click(next)
    waitFor(() => expect(screen.getByPlaceholderText('2/42')).toBeInTheDocument())

    await userEvent.click(prev)
    waitFor(() => expect(screen.getByPlaceholderText('1/42')).toBeInTheDocument())
  })
})
