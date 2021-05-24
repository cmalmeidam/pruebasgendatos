import * as transversales from "./function_tx";
import * as crearPost from "./function_crearPost"
var faker = require('faker');

describe("49. Crear un post con excerpt con valor fecha", function () {
  it("Crear un post Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    const nombrePost = faker.random.alphaNumeric(10);
    const excerptPost = faker.date.future();
    crearPost.crearPostExcerpt(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,nombrePost,excerptPost.toISOString());
    cy.wait(1000);
  });
});