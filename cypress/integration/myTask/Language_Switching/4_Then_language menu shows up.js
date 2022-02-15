import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`language menu shows up`, () => {
    cy.get(':nth-child(1) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA')
        .contains(`EESTI`);

    cy.get(':nth-child(2) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA')
        .contains(`SUOMI`)
        .as(`SuomiOption`);
        
    cy.get(':nth-child(3) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA')
        .contains(`РУССКИЙ (Эстония)`)
        .as(`RussianOption`);
});
