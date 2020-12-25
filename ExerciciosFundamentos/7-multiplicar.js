function multiplicar(x, y) {
  let result = 0;

  for (let i = 0; i < y; i++) {
    result += x;
  }
  return result;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));

function multiplicar2(numero, multiplicador) {
  if (numero === 0 || multiplicador === 0) return 0;

  return multiplicador === 1
    ? numero
    : numero + multiplicar2(numero, multiplicador - 1);
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
