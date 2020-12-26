// ATIVIDADE 5
function formatDecimalValue(decimalValue) {
	valorReais = `R$ ${decimalValue.toFixed(2).replace(".", ",")}`;
	console.log(valorReais);
}
formatDecimalValue(0.1 + 0.2);
