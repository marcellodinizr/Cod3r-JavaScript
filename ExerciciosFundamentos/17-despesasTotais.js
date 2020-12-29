function despesasTotais(itens) {
	var total = 0;
	for (let item of itens) {
		total += item.preco;
	}
	return total;
}

console.log(
	despesasTotais([
		{ nome: "Jornal online", categoria: "Informação", preco: 89.99 },
		{ nome: "Cinema", categoria: "Entretenimento", preco: 150 },
	])
);

console.log(
	despesasTotais([
		{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
		{ nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
	])
);

function despesasTotais2(itens) {
	return itens
		.map((item) => item.preco)
		.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

console.log(
	despesasTotais2([
		{ nome: "Jornal online", categoria: "Informação", preco: 89.99 },
		{ nome: "Cinema", categoria: "Entretenimento", preco: 150 },
	])
);

console.log(
	despesasTotais2([
		{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
		{ nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
	])
);

function despesasTotais3(itens) {
	return itens.reduce(
		(acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
}

console.log(
	despesasTotais3([
		{ nome: "Jornal online", categoria: "Informação", preco: 89.99 },
		{ nome: "Cinema", categoria: "Entretenimento", preco: 150 },
	])
);

console.log(
	despesasTotais3([
		{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
		{ nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
	])
);
