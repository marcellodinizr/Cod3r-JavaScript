require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // Object.Freeze não permite a mudança
console.log(MinhaApp.nome)