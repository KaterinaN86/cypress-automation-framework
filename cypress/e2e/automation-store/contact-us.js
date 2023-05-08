/// <reference types="Cypress" />
describe('Test contact us form via Automation Test Store', () => {
    //happy path test, filling in concat form on automationstore site.
    it('Should be able to submit successfully filled out form', () => {
        //Open automation store site.
        cy.visit('https://automationteststore.com/');
        //Click 'contact us' link
        cy.get('a:contains(Contact Us)').should('be.visible').click();
        //Fill out form
        cy.get("[name='first_name']").type('Joe');
    });
});
