function calcularMedia(numeros) {
  const quantDeNumeros = numeros.length;
  const soma = numeros.reduce((x, y) => x + y);

  return soma / quantDeNumeros;
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));

function calcularMedia2(numeros) {
  let quantDeNumeros = numeros.length;
  let soma = 0;

  for (numero of numeros) {
    // (i = 0; i < numeros.length; i++)
    soma += numero;
  }
  return soma / quantDeNumeros;
}

console.log(calcularMedia2([0, 10]));
console.log(calcularMedia2([1, 2, 3, 4, 5]));
