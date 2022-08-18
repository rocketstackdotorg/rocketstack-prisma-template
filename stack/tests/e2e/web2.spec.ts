import '../commands'

describe('End-to-end web2.0 testing', () => {
  let retries = 0

  Cypress.on('fail', (e) => {
    retries++
    throw e
  })

  Cypress.on('test:after:run', (test) => {
    if (test.state === 'passed') retries = 0
  })

  before(() => {
    cy.task('deleteTestbotUser')
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(
      'next-auth.session-token',
      'next-auth.csrf-token',
      'next-auth.callback-url'
    )
    // @ts-expect-error Property runnner is not exposed by Cypress
    if (retries >= 2) Cypress.runner.stop()
  })

  it('can launch and display layout.', () => {
    cy.visit('/')
    cy.get('#navCta').should('be.visible')
  })
})
