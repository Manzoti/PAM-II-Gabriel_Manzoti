let num1 = 2
const num2 = 3
var msg = "Olá amigos! Esse é o número:"
console.log(msg , num1)
console.log(num1+num2)
console.log(typeof num1)
console.log(typeof msg)


// para dar o espaço entre a escrita e o número dois tem 2 jeitos 
//só dar o espaço ou no console contatenar com ,

function Somar () {
    n1 = 2 
    n2 = 5
    console.log("O resultado é: ", n1+n2)
} // função é algo que eu crio! mas... tudo no js
// é função

Somar() // aqui ela é executada
Somar()

function SomarComParametros (n1,n2) {
    let resultado = "O resultado é: " + (n1 + n2)
    console.log(resultado)
}

SomarComParametros (16,30)
SomarComParametros (70,54)

const Teste = (n) => {
    let result = n % 2

    if ( result == 1 ) {
        return "Número impar"
    }

    return "Número par"
}

console.log (Teste(2))
console.log (Teste(7))
Teste (5) // essa linha não vai executar porque não tem console 