import React from 'react'

import { render, screen } from '@testing-library/react'
import AboutUs from '../../pages/AboutUs/AboutUs'

describe('About Us Page', () => {
  test('renders About Us', () => {
    render(<AboutUs />)

    const element = screen.getByTestId('about-us')
    expect(element).toBeInTheDocument()
  })
})
