import * as transversales from "./function_tx";
const faker = require('faker');

describe("64. Crear una página con titulo palabra y subtitulo emoji.", function () {
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
  const namePage = faker.lorem.word();
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
  cy.get(".gh-content-entry-title").contains(namePage).should('exist');
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true});
  cy.wait(1000);
  cy.get('[data-placeholder="Begin writing your page..."]').click({force:true})
  .type('❎');
  cy.wait(1000);
  cy.get('[data-placeholder="Begin writing your page..."]').contains('❎').should('exist');
  cy.wait(1000);
  cy.get(".post-settings").click();
  cy.wait(1000);
  cy.get(
    ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
  ).click();
  cy.wait(1000);
  cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        .contains("Delete")
        .click();
        cy.wait(1000);
}