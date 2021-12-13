var idade = 15;

if (idade <=18) {
    console.log("Eventos não permitidos para menor de 18 anos.")
} else {
    console.log("Prossiga para selecionar a Data do Evento.")
}

var dataEvento = "19/09/2022";
var partesData = dataEvento.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
if(data > new Date()){
    console.log ("Prossiga para Cadastro")
} else {
    console.log("Evento ja encerrado, selecione outra vaga.")
} /* professora, pesquisei uma outra maneira de calcular as datas, pois da maneira 
que eu estava calculando estava tirando somente a diferença dos dias, ignorando
mes e ano, achei também que assim acabou fazendo um pouco mais de sentido ao invés 
de declarar o valor da data atual, porem eu nao sei exatamente o significado das 
linhas 10 e 11 do sistema. Usei esse metodo somente por que foi oque me ajudou a 
prosseguir no desenvolvimento do sistema. */

var listaParticipante = ["Johnny","Manuel","Tania","Tamirys","Jessica","Bianca","Leandro"]

if (listaParticipante.length < 100){ 
    console.log ("Cadastro Realizado!")  
} else {
     console.log ("O Evento está sem vagas.")
} 
