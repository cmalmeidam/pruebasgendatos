import * as transversales from "./function_tx";
const testData = require("../fixtures/test_schema.json");

describe("18. Publicar una página con fecha en el pasado  YYYY -MM-DD", () => {
  const testDataRow=testData[Math.floor(Math.random() * testData.length)];
    const data = {
      namePage: testDataRow.page_title3,
      date: testDataRow.date3
    };
    context(`Generating a test for ${data.namePage}`, () => {
      it("should not show error date format", () => {
        transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
        cy.wait(1000);
        transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
        cy.wait(1000);
        createPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,data.namePage,data.date);
      });
    });
  });


function createPage(path, url, namePage, date) {

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
  cy.get(
    ".post-settings"
  ).click();
  cy.wait(1000);
  cy.get(
    '[placeholder="YYYY-MM-DD"]'
  ).click().clear().type(date).type("{enter}");
  cy.wait(1000);
  cy.get(
    ".close.settings-menu-header-action"
  ).click();
  cy.wait(1000);
  cy.visit(url+"pages/");
  cy.get(".gh-content-entry-title").contains(namePage).should('exist');
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