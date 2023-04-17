import React from 'react'
import { render, screen } from '@testing-library/react'

import { Management } from '../../components/Management/Management'
import store from '../../redux/store'
import userEvent from '@testing-library/user-event'
import withComponents from '../testUtilities'

describe('Management Component', () => {
  const ManagementComponent = withComponents(Management, store)
  test('renders images alt', async () => {
    render(<ManagementComponent />)

    const resultList = screen.getByTestId('management')
    expect(resultList).toBeInTheDocument()

    const sort = screen.getByTestId('sort') as HTMLSelectElement

    await userEvent.selectOptions(sort, 'alphabet')
    expect(sort.value).toBe('alphabet')
  })
})
