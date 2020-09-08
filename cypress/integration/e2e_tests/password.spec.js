describe('It will send a forgotten password email', () => {
    
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Clicks the sign in button', ()=>{
        cy.get('#signin_button').click()
    })

    it('Clicks the forget password', ()=>{
        // cy.get('.offset3 > a').click()
        cy.get('a[href*="/forgot-password.html"]').click()
    })

    it('should fill the email form',()=>{
        cy.get('#user_email').type('test@gmail.com')
    })

    it('should submit the form', ()=>{
        cy.get('input[type="submit"]').click()
    })

    it('should verify the form has been submitted', ()=>{
        cy.get('div').contains('Your password will be sent to the following email:')
    })
})


