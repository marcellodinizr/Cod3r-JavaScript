function segundoMaior(numeros) {
	let indiceDoMaior = 0;
	let segundoMaior;

	numeros.forEach((numero, indice) => {
		if (numero > numeros[indiceDoMaior]) {
			indiceDoMaior = indice;
		}
	});

	numeros.splice(indiceDoMaior, 1);
	segundoMaior = numeros[0];

	numeros.forEach((numero) => {
		if (numero > segundoMaior) {
			segundoMaior = numero;
		}
	});

	return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));

function segundoMaior2(numeros) {
	const maiorNumero = Math.max(...numeros);
	numeros = numeros.filter((numero) => numero != maiorNumero);
	const segundoMaior = Math.max(...numeros);

	return segundoMaior;
}

console.log(segundoMaior2([12, 16, 1, 5]));
console.log(segundoMaior2([8, 4, 5, 6]));

function segundoMaior3(numeros) {
	const NumerosOrdenados = numeros.sort(
		(numeroA, numeroB) => (numeroB - numeroA)
	);
	const segundoMaior = NumerosOrdenados[1];

	return segundoMaior;
}

console.log(segundoMaior3([12, 16, 1, 5]));
console.log(segundoMaior3([8, 4, 5, 6]));
