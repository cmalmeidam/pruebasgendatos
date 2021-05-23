import * as transversales from "./function_tx";
const faker = require('faker');

describe("25. Publicar pagina creando tag 100 caracteres dando click add.", function () {
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
  const subt = faker.lorem.word();
  const tag1 = faker.lorem.sentence(55);
  var length = 100;
  var tag = tag1.substring(0, length);
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
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true});
  cy.wait(1000);
  cy.get('[data-placeholder="Begin writing your page..."]').click({force:true})
  .type(subt);
  cy.wait(1000);
  cy.get(
    ".post-settings"
  ).click();
  cy.wait(1000);
  cy.get(".ember-power-select-trigger-multiple-input").first().type(tag).type("{enter}");
  cy.wait(1000);
  cy.get(
    ".close.settings-menu-header-action"
  ).click();
  cy.wait(1000);
  cy.get(
    ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
  ).click();
  cy.wait(1000);
  cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
    .contains("Publish")
    .click();
    cy.wait(1000);
  cy.get(".gh-alert.gh-alert-red.ember-view").contains("Validation error, cannot edit page. Validation failed for name.").should("exist");
  cy.wait(1000);
  cy.visit(url+"pages/");
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true});
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