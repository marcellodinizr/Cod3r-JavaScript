function simboloMais(quantidade) {
	let resultado = "";
	for (let i = 0; i < quantidade; i++) {
		resultado += "+";
	}
	return resultado;
}
console.log(simboloMais(3));

function simboloMais2(quantidade) {
	return Array(quantidade).fill("+").join("");
}
console.log(simboloMais2(4));

function simboloMais3(quantidade) {
	return "+".repeat(quantidade);
}

console.log(simboloMais3(5));
