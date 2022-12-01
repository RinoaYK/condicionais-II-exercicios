let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase().trim();

switch (nacionalidade) {
    case "brasileira":
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é do Brasil!") 
        break
    case "argentina":
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é da Argentina!")
        break
    case "uruguaia":
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é do Uruguai!")
        break
    case "chilena":
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é do Chile!")
        break
    case "colombiana":
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é da Colômbia!")
        break
    case "japonesa" :
        console.log("Sua nacionalidade é", nacionalidade[0].toUpperCase()+nacionalidade.substring(1)+", vc é do Japão!")
        break
    default:
        console.log("Nacionalidade não encontrada!") 
}


// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

// console.log("teste 2")