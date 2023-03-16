import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../../components/Card/Card'
import { MemoryRouter } from 'react-router-dom'

describe('Card Component', () => {
  const props = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episodes: 51,
    created: '04/11/2017',
    views: 7131,
    likes: 348,
  }

  test('renders card correctly', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('img')).toHaveAttribute('src', props.image)
    expect(screen.getByRole('link')).toHaveTextContent(props.name)
    expect(screen.getByText(/status/i)).toHaveTextContent(props.status)
    expect(screen.getByText(/episodes/i)).toHaveTextContent(props.episodes.toString())
  })

  test('renders card', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })

  test('renders card-image', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    const cardImage = screen.getByTestId('card-image')
    expect(cardImage).toBeInTheDocument()
  })

  test('renders card-body', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    const cardBody = screen.getByTestId('card-body')
    expect(cardBody).toBeInTheDocument()
  })

  test('renders card-stats', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    const cardStats = screen.getByTestId('card-stats')
    expect(cardStats).toBeInTheDocument()
  })
})
