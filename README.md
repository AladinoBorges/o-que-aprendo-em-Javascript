# o-que-aprendo-em-Javascript

Olá.

O meu nome é Aladino Borges, comecei a aprender a programar em Outrubro de 2020. Hoje são 13 de Novembro do mesmo ano e decidi começar a partilhar algumas coisas que acho fundamentais para o aprendizado e que me ajudaram e muito nesse meu início de trajetória.

A linguagem responsável pelo meu interesse em aprender a programar é o Python, que descobri enquanto lia um livro que acabou por me insentivar a comprar outro sobre Python (PROGRAMAÇÃO EM PYTHON. INTRODUÇÃO À PROGRAMAÇÃO UTILIZANDO MÚLTIPLOS PARADIGMAS). Apesar de ainda não ter acabado de ler o livro, pois decidi me focar no aprendizado para desenvolvimento web (Javascript, HTML e CSS) e ingressar num curso intensivo de desenvolvimento de software. Para colocar em perspectiva e incentivar quem está a aprender e quer ser um desenvolvedor de software: em menos de um mês aprendi as bases fundamentais para fazer o teste para entrar para o curso e fui aprovado. As bases que tenho são:

1 - Variáveis, Constantes e Tipos Primitivos (let/var e const):

let (variável)
const (constante)
var (variável, o mesmo que let, mas em desuso)
string (qualquer valor ou dado que esteja entre âspas ou vírgulas altas)
number (qualquer número, seja positivo, negativo ou fraccionário)
boolean (somente comporta dois valores, verdadeiro - true, ou falso - false)
null (nulo)
undefined (não definido)

2 - Operadores Aritméticos, Operadores de Comparação, Operadores Lógicos e Estruturas Condicionais:

a) + (adição);
b) - (subtração);
c) / (divisão);
d) * (multiplicação);

e) ++ (incremento);
f) -- (decremento);
g) ** (expoente);
h) % (resto da divisão);

i) < (menor);
j) = (atribuição de valor);
k) > (maior);
l) <= (menor ou igual que);
m) >= (maior ou igual que);

n) === (exatamente igual);
o) !== (exatamente diferente);

p) && (significa e);
q) || (significa ou);

r) if (se) - if (variavelDefinida = 1) {retorna ou imprime alguma coisa};
s) else if (ainda se) - else if (variavelDefinida =2) { retorna ou imprime outra coisa};
t) else (doutro modo) - {retorna ou imprime isso};

3 - Arrays, Strings e Estruturas de Repetição:

a) let istoEhUmaArrayA = [A, B, C, 1, 2, 3]; 
b) const istoEhOutraArray= ["Palavra, 'Uma frase maior e pontuada.', 123, 0.2];

c) let istoEhUmaString = "Uma frase entre âspas ou vírgulas altas é uma string";
d) const istoEhOutraString = 'Independentemente do tipo de vírgulas altas, o javascript reconhece a strig!';

e) for (let novaVariavel = n; novaVariavel <= variavelQueDitaPropriedade; novaVariavel ++) {}
f) for (let outraVariavel =n; outraVariavel => variavelQueDitaPropriedade; outraVariavel --) {}

4 - Funções:

a) function nomeDaFuncao (propriedadeDaFuncao) {}

Exemplo prático: uma função que informa que números são pares, quais os ímpares e se for zero, informa que não é tanto par quanto ímpar:

let dadosDaFuncao = nomeDaFuncao (10);

function nomeDaFuncao (propriedade) {

    for (let numeros = 0; numeros <= propriedade; numeros ++) {

        if (numeros === 0) {
            console.log (numeros, "Não um um número par ou ímpar")
        } else if (numeros % 2 === 0) {
            console.log (numeros, "é um número par.");
        } else {
            console.log (numeros, "é um número ímpar.");
        }
    }
}

Criei este repositório para todos os algoritmos que aprendi (e aprendo) ao colocar em prática os meus conhecimentos em Javascript de modo a ajudar todas as pessoas que estejam a iniciar ou no mesmo percurso que eu, pois percebi que aprender e desenvolver algoritmos ajuda e muito no aprendizado das linguagens de programação.

Cada algoritmo está relativamente bem comentado ou eu explico em forma de comentário no cógido, o que cada linha ou área do código faz e o porquê de as usar.

Todas as contribuições para esse repositório são bem-vindas desde que os códigos sejam ou estejam muito bem comentados.

Com carinho,

Aladino Borges

13 de Novembro de 2020.
