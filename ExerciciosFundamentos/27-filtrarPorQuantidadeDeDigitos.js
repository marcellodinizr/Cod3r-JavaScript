function filtrarPorQuantidadeDeDigitos(numeros, quantidadaDesejada) {
	let result = [];

	for (numero of numeros) {
		const quantidadeDeDigitos = String(numero).length;

		if (quantidadeDeDigitos === quantidadaDesejada) {
			result.push(numero);
		}
	}
	return result;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));

function filtrarPorQuantidadeDeDigitos2(numeros, quantidadaDesejada) {
	return numeros.filter((numero) => {
		const quantidadeDeDigitos = String(numero).length;

		return quantidadeDeDigitos === quantidadaDesejada;
	});
}

console.log(filtrarPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1));
