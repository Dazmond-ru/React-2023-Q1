import React from 'react'

import { render, screen } from '@testing-library/react'

import NotFound from '../../pages/NotFound/NotFound'

describe('NotFound Page', () => {
  test('renders 404', () => {
    render(<NotFound />)

    const element = screen.getByText(/Page Not Found\! \(404\)/i)
    expect(element).toBeInTheDocument()
  })
})
