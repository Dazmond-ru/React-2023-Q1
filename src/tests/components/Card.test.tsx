import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Card from '../../components/Card/Card'
import { MemoryRouter } from 'react-router-dom'
import { data as allData } from '../../data/data'
import userEvent from '@testing-library/user-event'

import store from '../../redux/store'
import withComponents from '../testUtilities'
import { CardState } from 'interfaces/interfaces'

const data: CardState = allData[0]

describe('Card Component', () => {
  const CardComponent = withComponents(Card, store)
  test('renders card correctly', () => {
    render(<Card card={data} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('img')).toHaveAttribute('src', data.image)
    expect(screen.getByRole('link')).toHaveTextContent(data.name)
    expect(screen.getByText(/status/i)).toHaveTextContent(data?.status)
    expect(screen.getByText(/species/i)).toHaveTextContent(data.species.toString())
  })

  test('renders card', () => {
    render(<Card card={data} />, { wrapper: MemoryRouter })

    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })

  test('renders card-image', () => {
    render(<Card card={data} />, { wrapper: MemoryRouter })

    const cardImage = screen.getByTestId('card-image')
    expect(cardImage).toBeInTheDocument()
  })

  test('renders card-body', () => {
    render(<Card card={data} />, { wrapper: MemoryRouter })

    const cardBody = screen.getByTestId('card-body')
    expect(cardBody).toBeInTheDocument()
  })

  test('renders card-stats', () => {
    render(<Card card={data} />, { wrapper: MemoryRouter })

    const cardStats = screen.getByTestId('card-stats')
    expect(cardStats).toBeInTheDocument()
  })

  test('opens and closes PopupCard on card click and cross click', async () => {
    render(<CardComponent card={data} />)

    expect(screen.queryByTestId('popup-card')).not.toBeInTheDocument()

    await userEvent.click(screen.getByTestId('card'))
    waitFor(() => expect(screen.getByTestId('popup')).toBeInTheDocument())

    expect(await screen.findByTestId('card-cross')).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('card-cross'))
    expect(screen.queryByTestId('popup-card')).not.toBeInTheDocument()
  })
})
