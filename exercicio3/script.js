// # Exercício 3 - Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

// ########################################################################################


// 1ª forma de resolver, que é inclusive exatamente o que pede o enunciado. 

const arrayNacionalidades = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
// const nacionalidade = prompt("Digite aqui a sua nacionalidade:").toLocaleLowerCase()
const nacionalidade = "BrAsiLeIrA".toLocaleLowerCase()

function checaNacionalidade (parametroDaFuncao) {

    if (arrayNacionalidades.includes(parametroDaFuncao)){

        console.log("Nacionalidade detectada:",parametroDaFuncao);
    
    }else {

        console.log("Nacionalidade não encontrada! :(");
    }

}
 checaNacionalidade(nacionalidade)
 checaNacionalidade("italiana")
 checaNacionalidade("argentina")
 checaNacionalidade("peruana")

// A resolução acima representa a forma exata que pedia o enunciado (exceto que deixei o prompt comentado pra otimizar os testes). Para reforçar o que aprendi hoje sobre a confusão entre nome de variável, nome de parâmetro da função, const dentro ou fora da função, nome de argumento ou a dúvida de qual argumento passar, a função acima é o mesmo caso da forma 3 que resolvi o exercício 1. Esse é o modelo menos chumbado, mas que não é totalmente genérico, pois temos uma const fora da função, e aproveitamos e a chamamos na primeira linha ali com o nome da função e o nome da const. Ocorre que neste formato, também podemos passar outros argumentos, neste caso strings diretas para testar o programa, e temos no Console o resultado devidamente esperado. Vejam que deixei bem claro ali no lugar do parâmetro que se trata do parâmetro da função, e não necessariamente precisamos colocar o nome da const, pois mesmo que fossem nomes iguais, seriam na prática coisas diferentes, e isso pode inclusive mais confundir do que ajudar. A mesma nomenclatura utilizei no if e no console.log, o que permite neste caso então fazer a leitura tanto do dado armazenado na const como no dado inputado manualmente ao chamar a função (ex: "ïtaliana).

// ########################################################################################

// 2ª forma de resolver
const arrayNacionalidades2 = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
//  const nacionalidade2 = "italiana"
 
function checaNacionalidade2 () {
 
    const nacionalidade2 = "italiana"
 
     if (arrayNacionalidades2.includes(nacionalidade2)){
 
         console.log(nacionalidade2);
     
     }else {
 
         console.log("nacionalidade não encontrada");
     }
 
 }
  checaNacionalidade2()
  checaNacionalidade2("brasileira")

// A resolução acima se trata portanto da forma chumbada que já explicamos no exercício 1, e que deve ser evitada caso o exercício ou o cenário não peçam nada parecido com isso. Vejam que aqui o argumento da função está vazio, e no if e no console.log o dado informado é o nome da const, que neste caso é exatamente ele que está ali no código e que vai gerar o booleano do if. A chamada da função, por sua vez, também deve vir vazia para a função rodar. Na verdade eu testei e coloquei um dado ao chamar a função novamente, e ela ignorou o argumento e considerou novamente a nacionalidade como não encontrada, por isso chamamos esse tipo de lógica como chumbada, ou seja, o que vale é a informação que está ali na const e fim de papo. 

// ########################################################################################

// 3ª forma de resolver
const arrayNacionalidades3 = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
  // const nacionalidade = prompt("Digite aqui a sua nacionalidade:").toLocaleLowerCase()
const nacionalidade3 = "BrAsiLeIrA".toLocaleLowerCase()
  
function checaNacionalidade3 () {
  
      if (arrayNacionalidades3.includes(nacionalidade3)){
  
          console.log("Nacionalidade detectada:",nacionalidade3);
      
      }else {
  
          console.log("Nacionalidade não encontrada! :(");
      }
  
  }
   checaNacionalidade3(nacionalidade3)
   checaNacionalidade3("italiana")
   checaNacionalidade3("argentina")
   checaNacionalidade3("peruana")


// Essa terceira resolução é muito semelhante a segunda, poderíamos dizer que está chumbada também mesmo a const estando fora dela. Como deixamos o parâmetro vazio e os dados que vão trazer o boolean são exatamente a const, no momento que chamamos a função com o nome da const ela até nos dá a resposta esperada, mas quando inserimos outros argumentos diretos, ela despreza as strings e considera apenas a chamada da função, e mesmo sem termos inserido o nome da const, ela simplesmente repete 4 vezes a nacionalidade brasileira no Console.

// ########################################################################################

// 4ª forma de resolver 
const arrayNacionalidades4 = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
   // const nacionalidade = prompt("Digite aqui a sua nacionalidade:").toLocaleLowerCase()
//    const nacionalidade3 = "BrAsiLeIrA".toLocaleLowerCase()
   
function checaNacionalidade4 (parametroDaFuncao2) {
   
       if (arrayNacionalidades4.includes(parametroDaFuncao2)){
   
           console.log("Nacionalidade detectada:",parametroDaFuncao2);
       
       }else {
   
           console.log("Nacionalidade não encontrada! :(");
       }
   
   }
    // checaNacionalidade3(nacionalidade3)
    checaNacionalidade4("italiana")
    checaNacionalidade4("argentina")
    checaNacionalidade4("peruana")

// Enfim a última resolução testada para o exercício 3, e aqui sim fizemos a função genérica, na qual não temos a figura da variável const, temos ali os parâmetros da função tanto no parâmetro quanto na lógica do if e no console.log, e aco chamar a função a gente mesmo digita os dados que queremos e a função roda perfeitamente de acordo com os valores esperados como resposta no Console. 
