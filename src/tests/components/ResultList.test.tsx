import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ResultList from '../../components/ResultList/ResultList'
import { data } from '../../data/data'

describe('ResultList Component', () => {
  test('renders images alt', () => {
    render(<ResultList data={data} />, { wrapper: MemoryRouter })

    const resultList = screen.getByTestId('resultList')
    expect(resultList).toBeInTheDocument()
  })
})
