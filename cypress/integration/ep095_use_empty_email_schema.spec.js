import * as transversales from "./function_tx";
const testData = require("../fixtures/test_empty.json");
const faker = require('faker');

describe("16. Dejar vacio nombre y correo.", function () {
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
    const correoInvalido = testData.post_name;
    cy.get(".ember-view").contains("Staff").click();
    cy.get(".gh-btn.gh-btn-green").click();
    cy.get("#new-user-email").type(correoInvalido.charAt(-1) + " ");
    cy.get(".gh-btn.gh-btn-green.gh-btn-icon").contains("Send invitation now").click()
    cy.wait(1000);
}