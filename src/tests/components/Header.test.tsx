import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'
import userEvent from '@testing-library/user-event'

describe('Header Component', () => {
  test('renders links of header', () => {
    render(<Header />, { wrapper: MemoryRouter })

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()

    const homeElement = screen.getByText('Home')
    expect(homeElement).toBeInTheDocument()

    const aboutElement = screen.getByText('About Us')
    expect(aboutElement).toBeInTheDocument()
  })
  test('changes link class when clicked', async () => {
    render(<Header />, { wrapper: MemoryRouter })

    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About Us')

    expect(homeLink).toHaveClass('active')
    expect(aboutLink).not.toHaveClass('active')

    await userEvent.click(aboutLink)

    expect(homeLink).not.toHaveClass('active')
    expect(aboutLink).toHaveClass('active')
  })
})
