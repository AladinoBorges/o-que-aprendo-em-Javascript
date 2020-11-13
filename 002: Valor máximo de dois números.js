// ALGORITMO PARA ACHAR O VALOR MÁXIMO DE UMA LISTA DE VALORES.

//Primeiro, declaramos a variável que armazenará os valores
//que serão comparados. Dentro desta variável, adicionamos como
//componente, o nome da função que comparará os dois valores que
//pretendemos comprarar.

let numMaior = acharMaximo (33, 13);

//De seguida, para que a nossa app exiba o maior valor da lista, usamos
//o comando console.log () para exibir o maior número da nossa variável
//numMaior.

console.log (numMaior);

//Depois de termos a nossa variável e comando de exibição do maior número,
//criamos a funcção acharMáximo que receberá dois parâmetros, numMin e numMax,
//e dentro dela usamos uma ou mais estruturas condicionais para comprarar os valores
//da variável numMaior e retornar o valor máximo.

function acharMaximo (numMin, numMax) {
	if (numMin > numMax) {
		return numMin;
	} else {
		return numMax;
	}
}
