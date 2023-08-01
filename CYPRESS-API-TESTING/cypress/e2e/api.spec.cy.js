/// <reference types="cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.request('activity?participants=1').then((response) => {
      cy.log(JSON.stringify(response.body.activity))
      cy.log(JSON.stringify(response.headers))
      cy.log(JSON.stringify(response.status))
    })
  })
  it('should validate headers', () => {
    cy.request('activity?participants=1').as('activity')
    cy.get('@activity')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')

    cy.get('@activity')
      .its('headers')
      .its('connection')
      .should('include', 'keep-alive')
  })

  it('should have status code 200', () => {
    cy.request('activity?participants=2').as('activity')
    cy.get('@activity').its('status').should('equal', 200)

    cy.request({
      url: 'https://catfact.ninja/d6df56d5f',
      failOnStatusCode: false,
    }).as('fail')
    cy.get('@fail')
    cy.get('@fail').its('status').should('equal', 404)
  })

  it('API Test - Get', () => {
    cy.request({ url: 'https://catfact.ninja/fact', method: 'GET' }).as(
      'catFact'
    )
    cy.get('@catFact').then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.body.fact).not.be.null
    })
  })

  it('API Test - POST', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      body: '{ title: "foo",body: "bar", userId: 1 }',
    }).as('ipAddress')

    cy.get('@ipAddress').its('status').should('equal', 201)
    cy.get('@ipAddress').then((response) => {
      cy.log(response.body)
      expect(response.body.id).to.be.a('number')
    })
  })
})
