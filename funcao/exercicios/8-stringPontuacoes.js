// ATIVIDADE 8
let stringPontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1];
function avaliarPontuacoes(stringPontuacoes) {
	let pontuacoes = stringPontuacoes;
	let recordPontuacao = 0;
	let piorJogo = 1;
	let maiorPontuacao = pontuacoes[0];
	let menorPontuacao = pontuacoes[0];

	for (let i = 1; i < pontuacoes.length; i++) {
		if (pontuacoes[i] > maiorPontuacao) {
			maiorPontuacao = pontuacoes[i];
			recordPontuacao++;
		} else if (pontuacoes[i] < menorPontuacao) {
			menorPontuacao = pontuacoes[i];
			piorJogo = i + 1;
		}
	}
	return [recordPontuacao, piorJogo];
}
console.log(avaliarPontuacoes(stringPontuacoes));
