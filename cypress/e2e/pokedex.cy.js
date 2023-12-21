const baseUrl = 'http://localhost:5000'

describe('Pokedex static server', function() {
  it('serves the front page properly', function() {
    cy.visit(baseUrl)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('allows one to navigate from the main page to a card page', function() {
    cy.visit(baseUrl)
    cy.contains('bulbasaur').click()
    cy.contains('ability')
    cy.contains('overgrow')
  })
})
