describe('Form automation', () => {
    
    before(function(){
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('should load feedback form', ()=>{
        cy.get('.form-inputs').should('be.visible')
    })

    it('should fill the feedback form', ()=>{
        cy.get('input[name="name"]').type('hello')
        cy.get('input[name="email"]').type('test@gmail.com')
        cy.get('input[name="subject"]').type('I need help')
        cy.get('textarea[name="comment"]').type('what is this')
    })

    it('should submit the form', ()=>{
        cy.get('input[type="submit"]').click()
    })

    it('should redirect us to the form completion area', ()=>{
        cy.get('div').contains('Thank you for your comments, hello. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    })
})
