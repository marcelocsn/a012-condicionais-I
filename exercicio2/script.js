let idade = Number (prompt("Qual a sua idade:"))
let ensinoMedio = prompt("Você concluiu o ensino médio:");
let isCursandoOutraFaculdade = prompt("Você está cursando faculdade?:")
ensinoMedio = ensinoMedio.toLocaleLowerCase()
isCursandoOutraFaculdade = isCursandoOutraFaculdade.toLocaleLowerCase()

if(idade >=18){
    console.log("A pessoa é maior de idade");
} else {3
    console.log("Você é menor de idade");
}

if (ensinoMedio === "sim") {
    console.log("Você concluiu o ensino médio:");
    
} else {
    console.log("Você não concluiu o ensino médio:")
}

if (isCursandoOutraFaculdade === "não"){
    console.log("Você não está cursando uma faculdade");

 } 
 else{
        console.log("Você está cursando uma faculdade")
    }
