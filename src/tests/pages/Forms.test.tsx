import React from 'react'

import { render, screen } from '@testing-library/react'
import Forms from '../../pages/Forms/Forms'

describe('Forms Page', () => {
  test('renders Forms', () => {
    render(<Forms />)

    const element = screen.getByTestId('forms')
    expect(element).toBeInTheDocument()
  })
})
