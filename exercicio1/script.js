// # Exercício 1 - Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

// 1ª forma de resolver o exercício 1
// const digiteUmNumero = 10

function checaNumeroPar(digiteUmNumero){

    if (digiteUmNumero % 2 === 0){

        return `O número ${digiteUmNumero} é par!`

    }else{

        return `O número ${digiteUmNumero} NÃO é par!`
    }

}

console.log(checaNumeroPar(10));
console.log(checaNumeroPar(11));

// Segundo a professora Andréa, essa resolução acima é a forma mais genérica de fazer uma função, ou seja, neste caso dizer que é mais gnérica é algo positivo, pois quanto mais genérica e simples uma função, mais versátil ela é. O único ponto da resolução acima é que ela não está totalmente aderente ao enunciado. Ele menciona uma const numérica, e na solução acima nem fizemos a const, mas tivemos o mesmo resultado. Veja que uma das coisas que nos fazem chamar essa função de versátil, é que podemos chamá-la quntas vezes quisermos ali no console.log, podendo simular quantos números a gente quiser. Neste caso o nome do parâmetro da função está no cálculo do if, e o número que faz essa função rodar a gente coloca ali no console.log quando chamamos a função.

// ########################################################################################

// 2ª forma de resolver o exercício 1

function checaNumeroPar2(){

    const digiteUmNumero2 = 34

    if (digiteUmNumero2 % 2 === 0){

        return `O número ${digiteUmNumero2} é par!`

    }else{

        return `O número ${digiteUmNumero2} NÃO é par!`
    }

}

console.log(checaNumeroPar2());
console.log(checaNumeroPar2(11));

// Já a função criada acima, como diz a Andréa é uma função chumbada, pois a variável está dentro da função, e ainda é uma const. Uma das maiores provas disso é que diferente do caso acima, onde chamamos a função com os valores que quisermos quantas vezes a gente quiser, neste caso aqui quando simulamos ali o console.log com o número 11, ele não dá erro no Console, mas ele simplesmente ignora esse 11, e considera que a função foi chamada novamente, portanto no Console aparecem duas vezes o resultado que "O número 34 é par". Neste caso acima como há uma variável dentro da função e há também um cálculo dentro dela referente a essa variável, então o parâmetro ali vazio e o argumento também vazio no console.log consideram o resultado baseado no valor dessa variável. É ainda importante dizer que sempre que a variável está dentro da função, os dados da lógica do if precisam ser exatamente a variável, e o parâmetro da função precisa ser vazio pra ela rodar. Já o argumento, como sabemos, estando vazio ou não ele é desprezado, valendo apenas o dado contido na variável. Ainda neste caso, se tentarmos escrever um nome no parâmetro da função e replicar ele na lógica do if, ocorrerá um erro no console dizendo que o nome da variável is not defined. Mesmo que o console log esteja dentro da função e não haja conflito sobre aquela questão de variável no escopo global ou local, eu fiz testes e a função não rodou. 

// ########################################################################################

// 3ª forma de resolver o exercício 1

const digiteUmNumero3 = 17

function checaNumeroPar3(parametroDaFuncao){

    
    if (parametroDaFuncao % 2 === 0){

        return `O número ${parametroDaFuncao} é par!`

    }else{

        return `O número ${parametroDaFuncao} NÃO é par!`
    }

}

console.log(checaNumeroPar3(digiteUmNumero3));
console.log(checaNumeroPar3(14)); 
console.log(checaNumeroPar3(9));

// Já esta última forma de resolver o exercício 1 seja a mais fiel ao enunciado, o que não necessariamente a torna melhor que a forma número 1, que é a mais genérica como já falamos. Criamos a const fora da função e neste caso aqui observe que o nome do parâmetro não precisa ser o mesmo nome que demos para a const, afinal são coisas distintas. O interessante neste caso é que conseguimos imprimir um console.log chamando a função e o nome da const, como de certa forma pedia o enunciado do exercício, mas também conseguimos chamar um outro número qualquer e os dois resultado são devidamente retornados passando pela estrutura do if else. Ainda acrescentamos mais um console.log e funcionou perfeitamente. 


