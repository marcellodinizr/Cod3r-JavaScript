// ATIVIDADE 34
function verificarString(string1, string2) {
	estaContida = true;
	for (let i = 0; i < string1.length; i++) {
		let stringCaracter1 = string1.charAt(i).toLowerCase();
		for (let j = 0; j < string2.length; j++) {
			let stringCaracter2 = string2.charAt(j).toLowerCase();
			if (stringCaracter1 == stringCaracter2) {
				estaContida = true;
				break;
			} else {
				estaContida = false;
			}
		}
		if (!estaContida) {
			// Se não tiver e o primeiro caso for False
			return estaContida; // ele retorna True (com 2 ex abaixo)
		}
	}
	return estaContida;
}
console.log(verificarString("abc", "cbb"));
console.log(verificarString("abc", "cba"));
