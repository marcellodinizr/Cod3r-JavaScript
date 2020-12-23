function inverso(valor) {
  const tipo = typeof valor;
  if (tipo == "boolean") return !valor;
  else if (tipo == "number") return -valor;
  else return `Voce esta retornando um ${tipo}`;
}

console.log(inverso(10));
console.log(inverso(-20));
console.log(inverso(true));
console.log(inverso("20"));
