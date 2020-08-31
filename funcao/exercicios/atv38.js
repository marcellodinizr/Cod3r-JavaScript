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