import React from 'react'

import { render, screen } from '@testing-library/react'
import Forms from '../../pages/Forms/Forms'
import store from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

describe('Forms Page', () => {
  test('renders Forms', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Forms />
        </BrowserRouter>
      </Provider>
    )

    const element = screen.getByTestId('forms')
    expect(element).toBeInTheDocument()
  })
})
