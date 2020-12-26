// ATIVIDADE 26
function acharPares(n1, n2) {
	var pares = [];
	while (n1 <= n2) {
		if (n1 % 2 == 0) {
			pares.push(n1);
		}
		n1++;
	}
	return pares;
}
console.log(acharPares(0, 100));
