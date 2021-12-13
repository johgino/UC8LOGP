let nomeDeAluno =  ["Marcel","Franklin","Rita","Afranio"]

// for (let nome of nomeDeAluno) {
// console.log(`Esta pessoa se chama ${nome}`)    
// }










let numeroDeAlunos = 10;
 let contador = 0;
while (contador <= numeroDeAlunos) {
    
   // console.log(contador)
     if (contador == 0) {
         console.log("o numero atual é zero")
 
     } else if (contador % 2 != 0){
     console.log ("o numero " + contador + " é impar") // concatenar
     } else {
         console.log (`O numero ${contador} é par`) // interpolação mais simples
     } 
     contador++;
 }  





// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//    // console.log(contador) , aqui continua comentario depois
//     if (contador == 0) {
//         console.log("o numero atual é zero")

//     } else if (contador % 2 == 0){
//     console.log ("o numwero " + contador + " é par") // concatenar
//     } else {
//         console.log (`O numero ${contador} é impar`) // interpolação mais simples
//     }
// }  