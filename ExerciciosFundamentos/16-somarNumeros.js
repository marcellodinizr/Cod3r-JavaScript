function somarNumeros(numeros) {
	//let soma =
	return numeros.reduce((soma, numero) => soma + numero);
	//return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
