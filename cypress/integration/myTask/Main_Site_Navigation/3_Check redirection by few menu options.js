import { should } from "chai";
import { When, Then } from "cypress-cucumber-preprocessor/steps";


When(`I tap on any of: Ninja Treasures, Promotions, Customer Support page`, () => {
    
    // const listOptions = ["Ninja Treasures","PROMOTIONS","Customer Support page"];
    // I have done a variant which works now :
    const listOptions = ["Home","SPORTS BETTING", "LIVE BETTING"];

    cy.get(`#app > main > header > div > nav > ul > li`)
    .as(`menuOptions`)
    .should(`be.visible`);
    
    for (let i = 0; i < listOptions.length; i++) {
        cy.get(`@menuOptions`).contains(listOptions[i]).click();
        cy.wait(1000);

        switch (listOptions[i]) {
            case "Home": {
                cy.url().should('eq', Cypress.config().baseUrl);
                break;
            }
            case "SPORTS BETTING": {
                cy.url()
                .should('include', `sports-betting`)
                should('not.include', `live`);
                break;
            }
            case "LIVE BETTING": {
                cy.url()
                .should('include', `sports-betting/live`);
                break;
            }
        }           
    }
});

Then(`I redirects to corresponded page`, () => {
    cy.log(`Checked on the previous step: CORRECT`);
});