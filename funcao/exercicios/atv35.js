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