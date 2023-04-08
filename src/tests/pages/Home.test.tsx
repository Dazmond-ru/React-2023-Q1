import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../../pages/Home/Home'

import { server, rest } from '../../data/server'
import userEvent from '@testing-library/user-event'

import { data } from '../../data/data'

describe('Home Page', () => {
  test('renders Home', () => {
    render(<Home />, { wrapper: MemoryRouter })

    const element = screen.getByTestId('home')
    expect(element).toBeInTheDocument()
  })

  test('renders card', async () => {
    render(<Home />, { wrapper: MemoryRouter })

    const button = screen.getByTestId('search-button')
    await userEvent.click(button)

    const cards = await waitFor(() => screen.getAllByTestId('card'))
    const firstCard = cards[0]
    expect(firstCard).toBeInTheDocument()

    await userEvent.click(firstCard)
    const cardCross = screen.getByTestId('card-cross')
    expect(cardCross).toBeInTheDocument()
    await userEvent.click(cardCross)
    expect(cardCross).not.toBeInTheDocument()
  })

  test('renders error', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        // req.url.searchParams.get('name');
        return res(ctx.status(404), ctx.json({ error: 'No exact matches found.' }))
      })
    )

    render(<Home />, { wrapper: MemoryRouter })

    const button = screen.getByTestId('search-button')
    await userEvent.click(button)

    const error = await waitFor(() => screen.findByText(/No matches found/i))
    expect(error).toBeInTheDocument()
  })

  test('renders error ', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        // req.url.searchParams.get('name');
        return res(ctx.status(200), ctx.json({ results: data }))
      })
    )

    render(<Home />, { wrapper: MemoryRouter })

    const button = screen.getByTestId('search-button')
    await userEvent.click(button)

    const rick = await waitFor(() => screen.findByText(/Rick Sanchez/i))
    expect(rick).toBeInTheDocument()
  })
})
