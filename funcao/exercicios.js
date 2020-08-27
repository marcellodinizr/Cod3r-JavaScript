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

// ATIVIDADE 25
let contador = 1
for (let i = 1; i <= 50; i++) {
    console.log(contador)
    contador++
}

// ATIVIDADE 26
function acharPares(n1, n2) {
    var pares = []
    while (n1 <= n2) {
        if ((n1 % 2) == 0) {
            pares.push(n1)
        }
        n1++
    }
    return pares
}
console.log(acharPares(0, 100))

// ATIVIDADE 28
function vetorParImpar(numeros) {
    let qtdePar = 0
    let qtdeImpar = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            qtdePar++
        } else {
            qtdeImpar++
        }
    }
    console.log(`${qtdePar} números pares e ${qtdeImpar} números ímpares.`)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
vetorParImpar(vetor)

// ATIVIDADE 29
function numeroIntervalo(vetor) {
    let qtdeNumeros = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdeNumeros++
        }
    }
    return `${qtdeNumeros} números dentro do intervalo.`
}
vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(numeroIntervalo(vetor))

// ATIVIDAE 30
function maiorMenor(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}
vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))

// ATIVIDADE 24
function helloWorld() {
    let contador = 1
    while (contador <= 11) {
        contador++
        console.log('Hello World!')
    }
}
helloWorld()

// ATIVIDADE 34
function verificarString(string1, string2) {
    estaContida = true;
    for (let i = 0; i < string1.length; i++) {
        let stringCaracter1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let stringCaracter2 = string2.charAt(j).toLowerCase()
            if (stringCaracter1 == stringCaracter2) {
                estaContida = true
                break
            } else {
                estaContida = false
            }
        }
        if (!estaContida) {     // Se não tiver e o primeiro caso for False 
            return estaContida  // ele retorna True (com 2 ex abaixo)
        }
    }
    return estaContida
}
console.log(verificarString('abc', 'cbb'))
console.log(verificarString('abc', 'cba'))

// ATIVIDADE 35
vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor Adicinado: ' + vetorAdicionar)
    console.log('Vetor Resultado: ' + vetorInicial)
}
adicionarVetor(vetorPilha, vetorAdiciona)

// ATIVIDADE 32
function mediaAritmetica(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}
vetor = [1, 2, 3, 4, 5]
console.log(mediaAritmetica(vetor))

//ATIVIDADE 33
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]
function concatenar() {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}
console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

// ATIVIDADE 38
function imprimirImpares(inicio = 0, fim = 100) {
    let aux
    if (inicio > fim) {
        aux = fim
        fim = inicio
        inicio = aux
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}
imprimirImpares(19, 3)
imprimirImpares(1, 30)

// ATIVIDADE 30
function maiorMenor(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}
vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))

// ATIVIDADE 20
function sacarDinheiro(valorSaque) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                nota100++
                break
            case 50:
                valorSaque -= 50
                nota50++
                break
            case 10:
                valorSaque -= 10
                nota10++
                break
            case 5:
                valorSaque -= 5
                nota5++
                break
            case 1:
                valorSaque -= 1
                nota1++
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ''

    if (nota100 > 0) {
        resultado += `${nota100} nota(s) de R$ 100 `
    }
    if (nota50 > 0) {
        resultado += `${nota50} nota(s) de R$ 50 `
    }
    if (nota10 > 0) {
        resultado += `${nota10} nota(s) de R$ 10 `
    }
    if (nota5 > 0) {
        resultado += `${nota5} nota(s) de R$ 5 `
    }
    if (nota1 > 0) {
        resultado += `${nota1} nota(s) de R$ 1 `
    }
    return resultado
}
console.log(sacarDinheiro(153))

// ATIVIDADE 39
function inverterVetor(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {

            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores com tamanhos diferentes'
    }
    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}
let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]
inverterVetor(vetorA, vetorB)