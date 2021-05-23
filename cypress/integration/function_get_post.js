import * as transversales from "./function_tx";

export function getpostcoordenadas() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://my.api.mockaroo.com/post_coordenada.json?key=f52020c0", false); // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    console.log(request.responseText);
    let objeto = [];
    objeto = JSON.parse(request.responseText)
    let registro = objeto[transversales.getRandomInt(0, objeto.length)];
    return registro;    
  }
}
