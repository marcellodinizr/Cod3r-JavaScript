function contarCaractere(caractereBuscado, frase) {
	let contador = 0;

	for (let indice in frase) {
		//for (let i = 0; i < frase.length; i++)
		if (frase.charAt(indice) === caractereBuscado) {
			contador++;
		}
	}
	return contador;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));

function contarCaractere2(caractereBuscado, frase) {
	return [...frase].filter((caractere) => caractere === caractereBuscado)
		.length;
}

console.log(contarCaractere2("r", "A sorte favorece os audazes"));
console.log(contarCaractere2("c", "Conhece-te a ti mesmo"));
