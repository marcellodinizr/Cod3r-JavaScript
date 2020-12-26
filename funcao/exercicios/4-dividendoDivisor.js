// ATIVIDADE 4
function valores(dividendo, divisor) {
  const resultado = Math.floor(dividendo / divisor);
  const restoDaDivisao = dividendo % divisor;
  console.log("Divisao: " + resultado);
  console.log("Resto: " + restoDaDivisao);
}
valores(11, 4);
