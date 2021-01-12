function removerVogais(frase) {
	const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

	vogais.forEach((vogal) => (frase = frase.replace(vogal, "")));

	return frase;
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));

function removerVogais2(frase) {
	return frase.replace(/[aeiou]/gi, "");
}

console.log(removerVogais2("Cod3r"));
console.log(removerVogais2("Fundamentos"));