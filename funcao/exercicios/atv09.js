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