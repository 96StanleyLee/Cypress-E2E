describe('Navbar', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('should display online banking content', ()=>{
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('be.visible').and('contain', 'Online Banking')
    })

    it('should display feedback content', ()=>{
        cy.get('#feedback').click()
        cy.get('h3').contains('Feedback')
    })
    
    it('should display home content', ()=>{
        cy.get('a[href="/index.html"]').click()
        cy.url().should('include', 'index.html')
    })



})
