import * as transversales from "./function_tx";
const faker = require('faker');

describe("10. Publicar una página con titulo con más de 255 palabras y subtitulo, no trigger.", function () {
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
  const namePage = faker.lorem.sentence(255);
  const subt = faker.lorem.sentence();
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click();
  cy.wait(1000);
  cy.get('a[href*="page"]').contains('New page').click();
  cy.wait(1000);
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(namePage)
    .type("{enter}");
    cy.wait(1000);
  cy.get('[data-placeholder="Begin writing your page..."]').click({force:true})
  .type(subt);
  cy.wait(1000);
  cy.get('[data-placeholder="Begin writing your page..."]').contains(subt).should('exist')  ;
  cy.wait(1000);
  cy.get(
    ".gh-btn"
  ).contains("publish").should('not.exist');
  cy.wait(1000);
  
}