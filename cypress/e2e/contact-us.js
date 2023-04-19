/// <reference types="Cypress" />
describe('Test contact us form', () => {
    //happy path test, filling in concat form on webuniversitu site.
    it('Should be able to submit successfully filled out form', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name=\"first_name\"]').type("Joe");
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('some-email@gmail.com')
        cy.get('textarea.feedback-input').type('Enter comment here', {force:true})
        cy.get('[type="submit"]').click()
        //cy.get('#contact-us').click({force:true});
    });
    it.only('Should not be able to successfully submit filled out contact form', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name=\"first_name\"]').type("Joe");
        cy.get('[name="last_name"]').type('Doe');
        cy.get('textarea.feedback-input').type('Enter comment here', {force:true})   
        cy.get('[type="submit"]').click()
    });
});