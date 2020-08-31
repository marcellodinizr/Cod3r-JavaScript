// ATIVIDADE 2
function triangulo(a, b, c) {
    if (a == b && b == c) {
        return console.log('Triangulo Equilátero')
    } else if (a == b || a == c || b == c) {
        return console.log('Triangulo Isósceles')
    } else if (a !== b || b !== c) {
        return console.log('Triangulo Escaleno')
    } else {
        console.log('Valor Invalido')
    }
}
triangulo(1, 1, 1)
triangulo(1, 1, 2)
triangulo(1, 2, 2)
triangulo(1, 2, 1)
triangulo(1, 2, 3)