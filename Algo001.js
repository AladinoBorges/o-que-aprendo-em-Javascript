ALGORITMO PARA TROCAR O VALOR DE UMA VARIÁVEL X PELO VALOR DE OUTRA VARIÁVEL Y:

//Primeiro declaramos o valor das variáveis iniciais (usar let em vez de var):

let num1 = 22;
let num2 = 11;

//Estando as duas variáveis declaradas, criamos uma terceira variável que armazenará temporáriamente
//o valor de uma das variáveis, de preferência a primeira:

let numTemp = num1;

//Tendo em conta que o valor da primeira variável está armazenada numa temporária,
//podemos então trocar os valores das mesmas da seguinte maneira:

num1 = num2;
num2 = numTemp;

//Por fim, usamos o comando sonsole.log() para que sejam impressos os valores
//atuais de ambas as variáveis.

console.log (num1);
console.log (num2);