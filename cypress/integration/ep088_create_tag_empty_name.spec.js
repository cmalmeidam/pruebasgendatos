import * as transversales from "./function_tx";
const faker = require('faker');

describe("88. Crear un tag con nombre vacío.", function () {
  it("Crear una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createTag(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function createTag(path, url) {
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Tags').click();
  cy.wait(1000);
  cy.get('a[href*="tags"]').contains('New tag').click({force: true});
  cy.wait(1000);
  cy.url().should("eq",
  url+"tags/new");
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
  cy.wait(1000);
  cy.contains("p.response", "You must specify a name for the tag.");
  cy.wait(1000);
}