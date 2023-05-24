// # Exercício 2 - Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// Exemplo:
//Caso a primeira pessoa tenha idade >= 18: "A pessoa é maior de idade"
// e caso não seja: "A pessoa é menor de idade"

// ########################################################################################


// Abaixo a solução:

// let idadePessoa = 18
// const finalizouEnsinoMedio = true
// const estaFazendoFaculdade = false

function verificarIdadeEescolaridade (idade, terminouEnsinoMedio, estaCursandoFaculdade){
    
    if (idade >= 18){

        console.log("A pessoa é MAIOR de idade!");

    }else {

        console.log("A pessoa é MENOR de idade!");
    }
    
     if (terminouEnsinoMedio === true){

        console.log("A pessoa terminou o ensino médio!");

    }else {

        console.log("A pessoa NÃO terminou o ensino médio!");

    }
     
     if (estaCursandoFaculdade === false){

        console.log("A pessoa NÃO está cursando uma faculdade!");
    
    }else {

        console.log("A pessoa ESTÁ cursando uma faculdade!");
    }

}

// verificarIdadeEescolaridade(idadePessoa, finalizouEnsinoMedio, estaFazendoFaculdade)
verificarIdadeEescolaridade(17,true,false)
verificarIdadeEescolaridade(23,true,true)

// Na resolução do exercício acima, note que fizemos tanto utilizando variáveis, que no enunciado nem pede, mas também fizemos no modelo função genérica, que é o que está válido e não transformamos em comentário. Neste caso então os nomes dos parâmetros foram utilizados nas lógicas dos if no meio da função, e os argumentos a gente colocou os dados que quisemos ali ao lado do nome da função. 


