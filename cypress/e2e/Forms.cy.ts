/// <reference types="cypress" />

describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('nav > ul').as('links')

    cy.get('@links').contains('Forms').click()
  })

  it('renders Forms', () => {
    cy.get('[data-testid="forms"]').should('be.visible')
  })

  it('renders Form', () => {
    cy.get('[data-testid="form"]').should('be.visible')
  })

  it('user must enter name, created, status, image', () => {
    cy.get('[data-testid="confirmInput"]').click()
    cy.get('[data-testid="submit"]').click()

    cy.contains(/Please enter name!/i).should('be.visible')
    cy.contains(/Please enter created date!/i).should('be.visible')
    cy.contains(/Please choose status!/i).should('be.visible')
    cy.contains(/Please add an image!/i).should('be.visible')
  })

  it('name must be start with a capital letter', () => {
    cy.get('[data-testid="nameInput"]').type('name')
    cy.get('[data-testid="submit"]').click()
    cy.contains(/Your name should start with a capital letter!/i).should('be.visible')
  })

  it('name must be more than 4 letters', () => {
    cy.get('[data-testid="nameInput"]').type('nam')
    cy.get('[data-testid="submit"]').click()
    cy.contains(/Your name must be more than 4 letters!/i).should('be.visible')
  })

  it('user must confirm', () => {
    cy.get('[data-testid="nameInput"]').type('Name')
    cy.get('[data-testid="submit"]').click()
    cy.contains(/Confirm if you are agree with!/i).should('be.visible')
  })

  it('checks if submit button is disabled', () => {
    cy.get('[data-testid="submit"]').should('be.disabled')
  })
})
