import React from 'react'

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Cards from '../../components/Cards/Cards'

describe('Cards Component', () => {
  test('renders images alt', () => {
    render(<Cards />, { wrapper: MemoryRouter })

    const cards = screen.getByTestId('cards')
    expect(cards).toBeInTheDocument()
  })
})
