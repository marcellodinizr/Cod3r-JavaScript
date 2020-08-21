// ATIVIDADE 1
function operacoes(x, y, soma, sub, div, mult,) {
    soma = x + y
    sub = x - y
    div = x / y
    mult = x * y
    console.log(soma, sub, div, mult)
}

operacoes(10, 5)

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

// ATIVIDADE 3
function parametros(base, expoente) {
    return console.log(Math.pow(base, expoente))
}
parametros(3, 5)
parametros(2, 3)

