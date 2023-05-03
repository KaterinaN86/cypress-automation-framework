/// <reference types="Cypress" />
describe('Test contact us form via Atuomation Test Store', () => {
    //happy path test, filling in concat form on webuniversitu site.
    it('Should be able to submit successfully filled out form', () => {
        cy.visit('https://automationteststore.com/');
    });
});
