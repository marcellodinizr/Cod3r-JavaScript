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

// ATIVIDADE 4
function valores(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor)
    const restoDaDivisao = dividendo % divisor
    console.log("Divisao: " + resultado)
    console.log("Resto: " + restoDaDivisao)
}
valores(11, 4)

function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}
divisao(11, 4)

// ATIVIDADE 5
function formatDecimalValue(decimalValue) {
    valorReais = `R$ ${decimalValue.toFixed(2).replace(".", ",")}`
    console.log(valorReais)
}
formatDecimalValue(0.1 + 0.2)

// ATIVIDADE 6
function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
}
console.log(jurosSimples(100, 10 / 100, 2))
console.log(jurosComposto(100, 10 / 100, 2))

// ATIVIDADE 7
function bhaskara(ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2 - (4 * ax2 * c))
    if (delta < 0) {
        return 'Delta Negativo'
    }
    x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    x2 = (-bx - Math.sqrt(delta)) / 2 * ax2

    resultados.push(x1)
    resultados.push(x2)
    return resultados
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 3))
console.log(bhaskara(1, 8, -9))

// ATIVIDADE 8

