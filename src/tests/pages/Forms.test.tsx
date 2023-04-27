import React from 'react'

import { render, screen } from '@testing-library/react'
import Forms from '../../pages/Forms/Forms'
import store from '../../redux/store'
import withComponents from '../testUtilities'

describe('Forms Page', () => {
  const FormsComponent = withComponents(Forms, store)
  test('renders Forms', () => {
    render(<FormsComponent />)

    const element = screen.getByTestId('forms')
    expect(element).toBeInTheDocument()
  })
})
