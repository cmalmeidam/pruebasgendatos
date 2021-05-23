import * as transversales from "./function_tx";
const faker = require('faker');

describe("4. Crear una página con titulo únicamente ingresando más de 255 caracteres.", function () {
  it("Crear una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function createPage(path, url) {
  const namePage = faker.lorem.sentence( 501 );
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click();
  cy.wait(1000);
  cy.get('a[href*="page"]').contains('New page').click();
  cy.wait(1000);
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(namePage)
    .type("{enter}");
    cy.wait(1000);
  cy.visit(url+"pages/");
  cy.wait(1000);
  cy.get(".modal-header").contains("Are you sure you want to leave this page?").should('exist');
  cy.wait(1000);
}