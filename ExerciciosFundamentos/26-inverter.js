function inverter(objeto) {
	const objetoInvertido = {};

	Object.entries(objeto).forEach((parChaveValor) => {
		const chave = 0,
			valor = 1;
		objetoInvertido[parChaveValor[valor]] = parChaveValor[chave];
	});

	return objetoInvertido;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));

function inverter2(objeto) {
	const paresDeChaveValorInvertidos = Object.entries(
		objeto
	).map((parChaveValor) => parChaveValor.reverse());

	return Object.fromEntries(paresDeChaveValorInvertidos);
}

console.log(inverter2({ a: 1, b: 2, c: 3 }));