import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import { Management } from '../../components/Management/Management'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import userEvent from '@testing-library/user-event'

describe('ResultList Component', () => {
  test('renders images alt', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Management />
        </BrowserRouter>
      </Provider>
    )

    const resultList = screen.getByTestId('management')
    expect(resultList).toBeInTheDocument()

    const sort = screen.getByTestId('sort') as HTMLSelectElement

    await userEvent.selectOptions(sort, 'alphabet')
    expect(sort.value).toBe('alphabet')
  })
})
