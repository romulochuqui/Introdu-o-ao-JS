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



//Para mostrar datas 
let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));




//_______________________________________________________
//Criando ARRAYS
let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}]; //A lista de itens sempre começa em 0. Como exemplo: "palio 98" está ocupando a posição 0.

console.log(carros);        //Isso me mostra tudo dentro do Array
console.log(carros.length); //Mostra a quantidade de itens 
console.log(carros[0]);     //Aqui posso pegar qualquer informação contida dentro do Array por número.
console.log(carros[5].getFullYear());

carros.forEach(function(value, index){

    console.log(index, value);

});


//ORIENTAÇÃO À OBJETOS - É UMA FORMA DE PROGRAMAR QUE REUTILIZAMOS CÓDIGOS. DEIXA LIMPO E FUNCIONAL.

//"this" é um comando interno usado para referenciar um atributo, um método dentro de uma classe.
//Uma claase é um conjunto de atributos e métodos.
//ATRIBUTO - minhas informações armazenadas;
//MÉTODO - as ações que devem acontecer.
//INSTÂNCIA É QUANDO O OBJETO REPRESENTA UMA CLASSE

//Quanto mais inteligente for sua classe, mais limpo será seu código