describe('Searchbox Test', () => {

    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('clicks on the searchbar and enters the right text', ()=>{
        cy.get('#searchTerm').type('Stanley Lee{enter}')
    })

    it('verifies the new URL contains the search term', ()=>{
        cy.url().should('include', 'Stanley+Lee')
    })

    


})
