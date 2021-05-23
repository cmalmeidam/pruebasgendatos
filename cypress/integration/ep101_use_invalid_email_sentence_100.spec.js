import * as transversales from "./function_tx";
const faker = require('faker');

describe("17. Invitar a un miembro al staff con un correo ingresando una oración corta.", function () {
  it("Invitar alguien al staff en Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    invitacionCorreoInvalido(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function invitacionCorreoInvalido(path, url) {
    const correoInvalido = faker.lorem.text(100);
    cy.get(".ember-view").contains("Staff").click();
    cy.get(".gh-btn.gh-btn-green").click();
    cy.get("#new-user-email").type(correoInvalido);
    cy.get(".gh-btn.gh-btn-green.gh-btn-icon").contains("Send invitation now").click()
    cy.wait(1000);
  }