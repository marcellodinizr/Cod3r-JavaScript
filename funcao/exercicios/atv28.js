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