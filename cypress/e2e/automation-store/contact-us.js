/// <reference types="Cypress" />
describe('Test contact us form via Automation Test Store', () => {
    //happy path test, filling in concat form on automationstore site.
    it('Should be able to submit successfully filled out form', () => {
        //Open automation store site.
        cy.visit('https://automationteststore.com/');
        //Click 'contact us' link, using XPath selector.
        cy.xpath("//a[contains(@href,'contact')]").should('be.visible').click();
        //Fill out form
        cy.get("[name='first_name']").type('Joe');
        cy.get("[id='ContactUsFrm_email']").type('someEmail@gmail.com');
        //Using XPath to select text area.
        cy.xpath('//textarea[@rows=8]').type('How do I return a product?');
        //Using XPath axis to select submit button element in contact us form.
        cy.xpath('//div[@class="col-md-6 col-sm-6"]/child::button').click();
    });
    //Unhappy path, contact us form is filled in but submit fails because of missing e-mail.
    it('Should not be able to submit contact us form with missing e-mail data.', () => {
        //Open automation store site.
        cy.visit('https://automationteststore.com/');
        //Click 'contact us' link, using XPath selector.
        cy.xpath("//a[contains(@href,'contact')]").should('be.visible').click();
        //Fill out form.
        cy.get("[name='first_name']").type('Joe');
        //Using XPath to select text area.
        cy.xpath('//textarea[@rows=8]').type('How do I return a product?');
        //Using XPath axis to select submit button element in contact us form.
        //A message about invalid E-mail Address is displayed when submit button is clicked.
        cy.xpath('//div[@class="col-md-6 col-sm-6"]/child::button').click();
    });
});
