const num = +prompt("Digite um número:")
// 1. Utilizando ifs aninhados
if (num % 2 === 0){
    if (num % 3 === 0) {
        console.log("Muito bem! O número",num,"é divísivel por 2 e 3!")
    }
    else {
        console.log("O número",num,"é divisível por 2.")
    }
} else if (num % 3 === 0) {
    console.log("O número",num,"é divisível por 3.")
    
} else {
    console.log("O número",num,"não é divisível por 2 e nem 3.")
}


// 2. Utilizando um operador lógico para unir duas operações relacionais
if (num % 2 === 0 || num % 3 === 0){
    if (num % 2 === 0 && num % 3 === 0) {
        console.log("Muito bem! O número",num,"é divísivel por 2 e 3!")
    }
    if (num % 2 === 0 && num % 3 !== 0){
        console.log("O número",num,"é divisível por 2.")
    }
    if (num % 3 === 0 && num % 2 !== 0){
        console.log("O número",num,"é divisível por 3.")
    }
}
else {
    console.log("O número",num,"não é divisível por 2 e nem 3.")
}
