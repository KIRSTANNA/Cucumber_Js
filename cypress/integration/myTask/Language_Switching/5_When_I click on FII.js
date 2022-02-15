import { When } from "cypress-cucumber-preprocessor/steps";

When(`I click on FI`, () => { 
cy.get(`@SuomiOption`)
.click();
});
