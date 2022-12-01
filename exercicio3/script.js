//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }


// console.log("teste 3")

const nome = prompt("Qual o seu nome?")
const idade = +prompt("Quantos anos vc tem?")

const tern1 = nome === "José"? "Oi, Zé!" : "Olá, "+nome+"!"
console.log(tern1)

const tern2 = idade >= 18? "Pode tirar carteira de motorista!": "Ainda não pode tirar carteira de motorista :("
console.log(tern2)