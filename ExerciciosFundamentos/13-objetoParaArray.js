function objetoParaArray(objeto) {
	const result = [];

	for (let chave in objeto) {
		result.push([chave, objeto[chave]]);
	}
	return result;
}

console.log(
	objetoParaArray({
		nome: "Maria",
		profissao: "Desenvolvedora de software",
	})
);

console.log(
	objetoParaArray({
		codigo: 11111,
		preco: 12000,
	})
);

function objetoParaArray2(objeto) {
	const chave = Object.keys(objeto);
	const result = chave.map((chave) => [chave, objeto[chave]]);

	return result;
}

console.log(
	objetoParaArray2({
		nome: "Maria",
		profissao: "Desenvolvedora de software",
	})
);

console.log(
	objetoParaArray2({
		codigo: 11111,
		preco: 12000,
	})
);

function objetoParaArray3(objeto) {
	return Object.entries(objeto);
}

console.log(
	objetoParaArray3({
		nome: "Maria",
		profissao: "Desenvolvedora de software",
	})
);

console.log(
	objetoParaArray3({
		codigo: 11111,
		preco: 12000,
	})
);
