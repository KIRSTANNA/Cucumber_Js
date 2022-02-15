import { When } from "cypress-cucumber-preprocessor/steps";

When(`I click on RU`, () => { 
    cy.get(`@langugeSwitcher`).click();
    cy.get(`@RussianOption`).click();
});
