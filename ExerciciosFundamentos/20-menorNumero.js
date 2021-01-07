function menorNumero(numeros) {
	let menor = numeros[0];

	for (let i in numeros) {
		if (numeros[i] < menor) {
			menor = numeros[i];
		}
	}
	return menor;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([10, -15, 50, 3]));

function menorNumero2(numeros) {
	return numeros.reduce((anterior, atual) =>
		anterior < atual ? anterior : atual
	);
}

console.log(menorNumero2([10, 5, 35, 65]));
console.log(menorNumero2([10, -15, 50, 3]));

function menorNumero3(numeros) {
	return Math.min(...numeros);
}

console.log(menorNumero3([10, 5, 35, 65]));
console.log(menorNumero3([10, -15, 50, 3]));
