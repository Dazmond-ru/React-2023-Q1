/// <reference types="cypress" />

describe('About', () => {
  it('should have about', () => {
    cy.visit('/')

    cy.get('nav > ul').as('links')

    cy.get('@links').contains('About').click()

    cy.get('[data-testid="about-us"]').contains('About Us')
  })
})

export {}
