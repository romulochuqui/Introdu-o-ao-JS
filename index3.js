/*

let celular = function(){

    this.cor = "prata";

    this.ligar = function()
    {

        console.log("Fazer ligação");
        return "Ligando...";

    }

}

let objeto = new celular();

console.log(objeto.cor);
console.log(objeto.ligar());

*/


//NOVO JEITO DE FAZER 

class celular {

    constructor (){

        this.cor = "prata";

    }

    ligar(){

        console.log("Fazer ligação");
        return "Ligando...";

    }
    
}

let objeto = new celular();

console.log(objeto.cor);
console.log(objeto.ligar());