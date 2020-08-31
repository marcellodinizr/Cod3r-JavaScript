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