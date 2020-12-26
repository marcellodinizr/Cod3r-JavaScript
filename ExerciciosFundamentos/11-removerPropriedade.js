function removerPropriedade(objeto, nomeDaPropriedade) {
	const copia = Object.assign({}, objeto);
	delete copia[nomeDaPropriedade];

	return copia;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(
	removerPropriedade(
		{ id: 20, nome: "caneta", descricao: "Nao preenchido" },
		"descricao"
	)
);

function removerPropriedade2(objeto, nomeDaPropriedade) {
	const copia = { ...objeto };
	delete copia[nomeDaPropriedade];

	return copia;
}

console.log(removerPropriedade2({ a: 1, b: 2 }, "a"));
console.log(
	removerPropriedade2(
		{ id: 20, nome: "caneta", descricao: "Nao preenchido" },
		"descricao"
	)
);
