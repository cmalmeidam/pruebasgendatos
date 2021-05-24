import * as transversales from "./function_tx";
const faker = require('faker');

describe("Buscar Usuario version 3.42.5", function () {
  it("Buscar Usuario Ghost", function () {
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  });
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    buscarUsuario(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});
  
function buscarUsuario(path, url) {
    const nombreUsuario = faker.datatype.number();
    cy.get(".gh-nav-btn-search").click({force: true})
    .then(() => {
        cy.wait(1500);
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.get("[placeholder='Search site...']").first().type(nombreUsuario)
        .then(() => {
          cy.wait(1500);
        });
    })
    cy.wait(1000);
}