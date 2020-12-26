// ATIVIDADE 2
function triangulo(a, b, c) {
  if (a + b >= c && a + c >= b && b + c >= a) {
    if (a == b && b == c) {
      console.log("Triangulo Equilátero");
    } else if (a == b || b == c || c == a) {
      console.log("Triangulo Isósceles");
    } else if (a !== b && b !== c && c !== a) {
      console.log("Triangulo Escaleno");
    } else {
      console.log("Valor Invalido");
    }
  }
}
triangulo(1, 1, 1);
triangulo(1, 1, 2);
triangulo(1, 2, 2);
triangulo(1, 2, 1);
triangulo(1, 2, 3);
triangulo(5000, 2, 3);
