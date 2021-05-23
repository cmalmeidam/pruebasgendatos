export function crearPostTx1(path, url, nombrePost,detallePost='1') {
  cy.wait(1000);
  cy.get(".gh-secondary-action.gh-nav-new-post.ember-view")
    .click();    
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(nombrePost)
    .type("{enter}")    
  cy.wait(1500);
  cy.get(".koenig-editor__editor.__mobiledoc-editor")
  .type(detallePost); 
}

export function crearPostTx2(path, url, nombrePost) {
  cy.visit(url).then(() => {
    cy.wait(1500);
  });
  cy.get(".gh-nav-list.gh-nav-manage")
    .contains("Posts")
    .click();    
  cy.get(".gh-content-entry-title").contains(nombrePost).should("exist");
}

export function crearPost(path, url, nombrePost,detallePost='1') {
  crearPostTx1(path, url, nombrePost,detallePost='1');
  crearPostTx2(path, url, nombrePost,detallePost='1');  
}

export function crearPostUrl(path, url, nombrePost,urlPost) {
  crearPostTx1(path, url, nombrePost);
  cy.get(".post-settings")
  .click();  
  cy.get('input[id="url"]').clear().type(urlPost); 
  cy.wait(1500);
  cy.get(".close.settings-menu-header-action")
  .click();  
  cy.wait(1500);
  crearPostTx2(path, url, nombrePost); 
}

export function crearPostExcerpt(path, url, nombrePost,excerptPost) {
  crearPostTx1(path, url, nombrePost);
  cy.get(".post-settings")
  .click();  
  cy.get('textarea[id="custom-excerpt"]').clear().type(excerptPost); 
  cy.wait(1500);
  cy.get(".close.settings-menu-header-action")
  .click();
  cy.wait(1500);
  crearPostTx2(path, url, nombrePost); 
}

export function crearPostTag(path, url, nombrePost,tagPost) {
  crearPostTx1(path, url, nombrePost);
  cy.get(".post-settings")
  .click();    
  cy.get('input[id="ember-power-select-trigger-multiple-input-ember92"]').clear().type(tagPost).type("{enter}") ; 
  cy.wait(1500);
  cy.get(".close.settings-menu-header-action")
  .click();
  cy.wait(1500);
  crearPostTx2(path, url, nombrePost); 
}

export function crearPostMetadata(path, url, nombrePost,metaPost) {
  crearPostTx1(path, url, nombrePost);
  cy.get(".post-settings")
  .click();  
  cy.get(".nav-list-item").contains("Meta").click();
  cy.wait(1500);
  cy.get('input[id="meta-title"]').clear().type(metaPost) ; 
  cy.wait(1500);
  cy.get(".back.settings-menu-header-action")
  .click(); 
  cy.wait(1500);
  cy.get(".close.settings-menu-header-action")
  .click();
  cy.wait(1500);
  crearPostTx2(path, url, nombrePost);
}


