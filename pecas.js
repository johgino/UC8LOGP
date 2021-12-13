var listadePeca = ["Filtro de Ar","Motor","Amortecedor"]

if (listadePeca.length < 10){ // a função do length é contar quantos itens estao declarados dentro da variavel
    console.log ("É possível cadastrar mais peças")  
} else {
     console.log ("Não tem mais espaço")
} // sempre comentar seu codigo

let peso = 50;

if (peso <100){
    console.log ("a peça deve pesar no minimo 100g")
    } else {
    console.log ("a peça possui o peso minimo") 
    }

    let nomePeca ="disco de freio"

if (nomePeca.length>3){
console.log ("Nome da peça esta adequado para cadastro")
} else if (nomePeca.length==0){
    console.log ("O nome da peça nao pode ser vazio")
} else {
console.log("o nome deve ser maior que 3 caracteres")
}


switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
        break
    default:
        console.log("Nome da peça está adequado")
        break
}