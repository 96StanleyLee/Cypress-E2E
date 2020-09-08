describe('New Payee Test', () => {
    
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('.form-inputs').should('be.visible')

        cy.fixture('user').then((user)=>{
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
    })

    it('should add new payee to the list', () => {
        //TODO
        cy.get('li#pay_bills_tab').click()
        cy.get('a[href="#ui-tabs-2"]').should('be.visible')
        cy.contains('Add New Payee').click()
        // cy.get('#sp_payee').select('Apple')
        // cy.get('#sp_payee').should('contain', 'Apple')
        cy.get('#np_new_payee_name').type('Test name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('Account')
        cy.get('#np_new_payee_details').type('Details')
        cy.get('input').contains('Add').click()

    })

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible')
    })
})
