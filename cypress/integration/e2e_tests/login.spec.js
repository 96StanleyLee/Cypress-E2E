describe('Login / Logout Test', () => {
    
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should try to login with the invalid data', ()=>{
        //TODO
        cy.fixture('invaliduser').then((user)=>{
            let username = user.username 
            let password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
    })


    it('should display the error message', ()=>{
        cy.get('.alert-error').should('be.visible')
    })

    it('should login to the application successfully', ()=>{
        cy.fixture('user').then((user)=>{
            let username = user.username 
            let password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })

        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('should logout from application succesfully', ()=>{
        
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('contain', 'index.html')

    })
})
