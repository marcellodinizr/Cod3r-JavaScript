const escola = "Cod3r"

console.log(escola.charAt(4)) // -> Letra no indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // -> Tabela Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // -> Mostrar do indice 0 ao 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //  == replace(/\d/, 'e') Substituir os digitos

console.log('Ana,Maria,Pedro'.split(','))