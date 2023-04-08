import React from 'react'

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ResultList from '../../components/ResultList/ResultList'

describe('ResultList Component', () => {
  test('renders images alt', () => {
    render(<ResultList errorMessage={''} />, { wrapper: MemoryRouter })

    const resultList = screen.getByTestId('cards')
    expect(resultList).toBeInTheDocument()
  })
})
