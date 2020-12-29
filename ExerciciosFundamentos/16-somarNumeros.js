function somarNumeros(numeros) {
  //let soma =
  return numeros.reduce((soma, numero) => soma + numero);
  //return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));

function somarNumeros2(numeros) {
  var soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

console.log(somarNumeros2([10, 10, 10]));
console.log(somarNumeros2([15, 15, 15, 15]));
