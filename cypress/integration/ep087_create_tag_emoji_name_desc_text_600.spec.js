import * as transversales from "./function_tx";
const faker = require('faker');

describe("87. Crear un tag con nombre palabra y emoji y descripción texto de 600 caracteres.", function () {
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
  const nameTag = faker.lorem.word() + '❎';
  const descTag = faker.random.alphaNumeric(600);
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Tags').click();
  cy.wait(1000);
  cy.get('a[href*="tags"]').contains('New tag').click({force: true});
  cy.wait(1000);
  cy.url().should("eq",
  url+"tags/new");
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type(nameTag, { force: true });
  cy.wait(1000);
  cy.get("textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view").type(
    descTag, { force: true });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
  cy.wait(2000);
  cy.contains("p.response", "Description cannot be longer than 500 characters.");
  cy.wait(1000);
}