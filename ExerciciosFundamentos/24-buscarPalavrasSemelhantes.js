function buscarPalavrasSemelhantes(inicio, palavras) {
	const result = [];

	for (let palavra of palavras) {
		if (palavra.includes(inicio)) {
			result.push(palavra);
		}
	}
	return result;
}

console.log(
	buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
);
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]));

function buscarPalavrasSemelhantes2(inicio, palavras) {
	return palavras.filter((palavra) => palavra.includes(inicio));
}

console.log(
	buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"])
);
console.log(buscarPalavrasSemelhantes2("java", ["javascript", "java", "c++"]));
