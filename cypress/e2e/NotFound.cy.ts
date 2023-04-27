/// <reference types="cypress" />

describe('NotFound Page', () => {
  it('renders 404', () => {
    cy.visit('/404')

    cy.contains('Page Not Found! (404)')
  })
})
