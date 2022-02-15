import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When(`I tap on Casino`, () => {
    cy.get(`#app > main > header > div > nav > ul > li`)
    .as(`menuOptions`)
    .should(`be.visible`);
    
    cy.get(`@menuOptions`)
    .contains("CASINO")
    .as(`casino`)
    .click();
}); 

Then(`The game categories sub-menu opens: Popular, New, Slots, Live Casino, Jackpots, Table Games, Megaways`, () => {

    const expectedOptions = ["POPULAR","NEW","SLOTS","LIVE CASINO", "JECKPOTS", "TABLE GAMES", "MEGAWAYS"];
    
    //cy.get('.sc-dFtzxp > :nth-child(1) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw') // Drop-down 
    //`#app > main > header > div > nav > ul > li:nth-child(2) > ul > li:nth-child(3) > a > span > span`
    cy.get(`#app > main > header > div > nav > ul > li:nth-child(2) > ul > li`) // works !!!!
    .as(`popupOptions`)
    .then((options) => {
        const lastNum = expectedOptions.length;
        expect(options.length).to.equal(lastNum);
        
        for (let i = 0; i < lastNum; i++) {
            cy.log(options[i].textContent);
            expect(expectedOptions.includes(options[i].textContent));
        }
    });

    And(`If I tap on any of them I redirects it`, () => {

        const listOptions = ["POPULAR","NEW","SLOTS","LIVE CASINO", "JACKPOTS", "TABLE GAMES", "MEGAWAYS"];

        for (let i = 0; i < listOptions.length; i++) {
            if (i>0) {
                cy.get(`@casino`)
                .should(`be.visible`)
                .click();         
            }

            cy.log(`will check`, listOptions[i]);

            cy.get(`@popupOptions`)
            .contains(listOptions[i])
            .should(`be.visible`)
            .click();
            cy.wait(1000);
            
            let specificUrl = 
            listOptions[i]
            .replace(` `,`-`)
            .toLowerCase();

            cy.url()
            .should('include', specificUrl);
        }
    });
});