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
let stringPontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1]
function avaliarPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes
    let recordPontuacao = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            recordPontuacao++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [recordPontuacao, piorJogo]
}
console.log(avaliarPontuacoes(stringPontuacoes))

// ATIVIDADE 9
function classificarAlunos(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
        //  38 + (5 - (7)) 38 + - 2
    } else {
        return nota
    }
}
classificarAlunos(38)
classificarAlunos(39)
classificarAlunos(37)
classificarAlunos(100)

// ATIVIDADE 10
function numeroDivisivel(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}
console.log(numeroDivisivel(9))
console.log(numeroDivisivel(7))

// ATIVIDADE 11
function verificarAno(ano) {
    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        return true
    } else {
        return false
    }
}
console.log(verificarAno(0))
console.log(verificarAno(4))
console.log(verificarAno(100))
console.log(verificarAno(800))
console.log(verificarAno(2020))
console.log(verificarAno(2021))

// ATIVIDADE 12
function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(3))

// ATIVIDADE 13
function diaUtil(dia) {
    switch (dia) {

        case 1: return 'Fim de Semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia Util'
        case 7: return 'Fim de Semana'
        default:
            return 'Dia Invalido'
    }
}
console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(4))
console.log(diaUtil(5))
console.log(diaUtil(6))
console.log(diaUtil(7))

// ATIVIDADE 14
function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}
venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')

// ATIVIDADE 15
