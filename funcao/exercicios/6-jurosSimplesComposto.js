// ATIVIDADE 6
function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
	return capitalInicial + capitalInicial * taxaDeJuros * tempoDeAplicacao;
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
	return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao;
}
console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosComposto(100, 10 / 100, 2));
