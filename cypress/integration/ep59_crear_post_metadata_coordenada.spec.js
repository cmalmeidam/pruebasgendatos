import * as transversales from "./function_tx";
import * as crearPost from "./function_crearPost"
import * as datosPost from "./function_get_post";

describe("59. Crear un post con metadata titulo con coordenada", function () {
  it("Crear un post Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    let datos = datosPost.getpostcoordenadas();
    const nombrePost = datos.titulo;
    const metaPost = datos.descripcion;
    crearPost.crearPostMetadata(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5,nombrePost,metaPost);
    cy.wait(1000);
  });
});