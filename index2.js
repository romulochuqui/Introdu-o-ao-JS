let cor = "azul";

switch (cor) {  //O "switch" é usado para substituir os "if", para não ficar um código enorme.

    case "verde":
        console.log("siga");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "vermelho":
        console.log("pare");
        break;

    default:
        console.log("não sei");

}



//window é utilizado para mecher na janela em si
window.addEventListener('focus', event => {

    console.log("focus");

});


//document é o site
document.addEventListener('click', event => {

    console.log("CLICK");

});