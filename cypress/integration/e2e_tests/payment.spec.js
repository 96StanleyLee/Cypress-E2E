describe('Make payments to any saved payees', () => {

    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login()
    })


    it('should go to pay bills to Apple, and checkings',()=>{
        cy.get('li#pay_bills_tab').click()
        cy.get('#sp_payee').select('Apple').and('have.value', 'apple')
        cy.get('#sp_account').select('Checking').and('have.value', '2')
        cy.get('#sp_amount').type('500')
        cy.get('#sp_date').click()
        cy.get('span').contains('Next').click()
        cy.get('td > a').contains('14').click()
        cy.get('#sp_description').type('woot woot')
        cy.get('input').contains('Pay').click()
    })

    it('should show a success page',()=>{
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.')
    })
    
})
