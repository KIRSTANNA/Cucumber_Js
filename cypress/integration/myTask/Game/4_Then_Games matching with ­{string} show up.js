import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`Games matching with ­{string} show up`, (mySearch) => {
  
  cy.get('.sc-nVkyK > .sc-dkPtRN > .sc-gsDKAQ')
  .first()
  .click();

  cy.wait(1000);
  
  cy.get('h1.fkFXiW').then(($h1) => {
    let mySearchUppercase = (`` + mySearch).toUpperCase().trim();
    mySearchUppercase = mySearchUppercase.substring(0, mySearchUppercase.length - 1);

    const gameWelcomeUppercase = `` + $h1.text().toUpperCase().trim();
    
    expect(gameWelcomeUppercase).contain(mySearchUppercase);
  });
});