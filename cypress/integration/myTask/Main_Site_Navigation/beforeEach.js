
beforeEach({tag: `@mobile`}, () => {
  cy.log(
    "This will run before every scenario of Main_Site_Navigation.feature test, but NEVER for the rest feature files"
  );
 
// The next part is ignored because I developed this feature mostly as  for desctop by on that moment 
 // You can look at it in mobil view shows if set true below

  if (false) {
    cy.visit('/')
    cy.viewport(320, 480)
    cy.viewport('iphone-5')
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.ontouchstart = true
      }
    })
 }

 // cy.realTouch(); realSwipe(); // cypress-real-events plugin
 // https://help.perfecto.io/perfecto-help/content/perfecto/integrations/cypress.htm
});
