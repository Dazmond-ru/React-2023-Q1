/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the Home page', () => {
    cy.get('[data-testid="home"]').should('be.visible')
    cy.get('[data-testid="management"]').should('be.visible')
    cy.get('[data-testid="resultList"]').should('be.visible')
    cy.get('[data-testid="card"]').first().should('be.visible')
  })

  it('performs search on the Home page', () => {
    cy.get('[data-testid="search-input"]').type('rick')
    cy.get('[data-testid="search-input"]').should('have.value', 'rick')
    cy.get('[data-testid="card"]').first().click()
    cy.contains('location').should('be.visible')
  })

  it('navigates the pagination on the Home page', () => {
    cy.get('[placeholder="1/42"]').should('be.visible')
    cy.get('[data-testid="next"]').click()
    cy.get('[placeholder="2/42"]').should('be.visible')
    cy.get('[data-testid="prev"]').click()
    cy.get('[placeholder="1/42"]').should('be.visible')
    cy.get('[placeholder="1/42"]').type('15').type('{enter}')
    cy.get('[placeholder="15/42"]').should('be.visible')
  })

  it('should render correctly', () => {
    cy.get('[placeholder="Search"]').should('exist')
    cy.get('button').should('exist')
  })

  it('should update the input value on change', () => {
    cy.get('[placeholder="Search"]').type('hello').should('have.value', 'hello')
  })
})
