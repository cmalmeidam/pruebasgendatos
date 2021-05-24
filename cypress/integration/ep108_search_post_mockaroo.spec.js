import * as transversales from "./function_tx";
const faker = require('faker');

describe("18. Buscar un post ingresando una oración corta.", function () {
  it("Buscar un post en Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    buscarPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

  
function buscarPost(path, url) {
  let nombrePost = transversales.nombreGenericoPost().post_name;
  cy.wait(1000);
    cy.get(".gh-secondary-action.gh-nav-new-post.ember-view").click();
    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(nombrePost)
    .type("{enter}");
    cy.wait(1000);
    cy.visit(url)
    .then(() => {
      cy.wait(1500);
    });
    cy.get('.gh-nav-list.gh-nav-manage').contains('Posts').click()
    .then(() => {
      cy.wait(1500);
    });
    cy.get(".gh-nav-btn-search").click({force: true})
    .then(() => {
      cy.wait(1500);
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      cy.get("[placeholder='Search site...']").first().type(nombrePost)
      .then(() => {
        cy.wait(1500);
      });
    })
    cy.wait(1000);
  }