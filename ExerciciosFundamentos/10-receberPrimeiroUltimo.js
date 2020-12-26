function receberPrimeiroUltimo(elementos) {
	const indicePrimeiroElemento = 0;
	const indiceUltimoElemento = elementos.length - 1;
	const primeiroElemento = elementos[indicePrimeiroElemento];
	const ultimoElemento = elementos[indiceUltimoElemento];

	return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroUltimo([7, 10, "Ola"]));
console.log(receberPrimeiroUltimo([-100, "aplicativo", 16]));

function receberPrimeiroUltimo2(elementos) {
	const primeiroElemento = elementos.shift();
	const ultimoElemento = elementos.pop();

	return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroUltimo2([7, 10, "Ola"]));
console.log(receberPrimeiroUltimo2([-100, "aplicativo", 16]));

function receberPrimeiroUltimo3([primeiroElemento, ...elementosRestantes]) {
	const ultimoElemento = elementosRestantes.pop();

	return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroUltimo3([7, 10, "Ola"]));
console.log(receberPrimeiroUltimo3([-100, "aplicativo", 16]));
