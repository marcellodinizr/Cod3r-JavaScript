function receberParDeIndicesPares(numeros) {
	let result = [];

	for (let i = 0; i < numeros.length; i += 2) {
		const numeroPar = numeros[i] % 2 === 0;

		if (numeroPar) {
			result.push(numeros[i]);
		}
	}
	return result;
}

console.log(receberParDeIndicesPares([1, 2, 3, 4]));
console.log(receberParDeIndicesPares([10, 70, 22, 43]));

function receberParDeIndicesPares2(numeros) {
	return numeros.filter((numero, indice) => {
		const numeroPar = numero % 2 === 0;
		const indicePar = indice % 2 === 0;

		return numeroPar && indicePar;
	});
}

console.log(receberParDeIndicesPares2([1, 2, 3, 4]));
console.log(receberParDeIndicesPares2([10, 70, 22, 43]));
