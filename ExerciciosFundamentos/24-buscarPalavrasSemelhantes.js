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
