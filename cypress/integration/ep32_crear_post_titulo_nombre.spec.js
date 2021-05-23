import * as transversales from "./function_tx";
import * as crearPost from "./function_crearPost"
const testData = require("../fixtures/postTexto.json");

describe("32. Crear un post con titulo nombre", function () {
  it("Crear un post Ghost", function () {
    const testDataRow=testData[Math.floor(Math.random() * testData.length)];
    const data = {
      titulopost: testDataRow.titulopost     
    };
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    crearPost.crearPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,data.titulopost);
    cy.wait(1000);
  });
});