import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see search input field`, () => {
cy.get(`input#search`)
.as('inputSearch')
.should(`be.visible`);
});
