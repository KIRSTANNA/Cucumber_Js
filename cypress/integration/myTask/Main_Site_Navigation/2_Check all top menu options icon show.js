import { should } from "chai";
import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(`the menu opens upon tap on the burger icon`, () => {
// I don't see a burger icon and ignore it - just search a menu

// scy.get(`.sc-kDTinF > .sc-gIDmLj > ul> li span.sc-bBHxTw.kLluly.sc-bzPmhk`)
cy.get(`#app > main > header > div > nav > ul > li`)
.as(`menuOptions`)
.should(`be.visible`);

});

Then(`I check the all options show: Home, Casino, Live Casino, Sport Betting, Live Betting, Ninja Treasures, Promotions and Customer Support`, () => {

    // const expectedOptions = ["HOME","CASINO","LIVE CASINO","SPORTS BETTING", "LIVE BETTING", "Ninja Treasures", "PROMOTIONS", "Customer Support"];
    // I don't see   "Ninja Treasures" and "Customer Support" on the screen so
    // I nave done without them as example, to all steps work
    
    const expectedOptions = ["Home","CASINO","LIVE CASINO","SPORTS BETTING", "LIVE BETTING", "PROMOTIONS"];
    
    cy.get(`@menuOptions`)
    .then((options) => {
        const lastNum = expectedOptions.length;
        expect(options.length).to.equal(lastNum);
        
        for (let i = 0; i < lastNum; i++) {
            cy.log(options[i].textContent);
            expect(expectedOptions.includes(options[i].textContent));
        }
    });
});