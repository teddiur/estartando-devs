// De 0-1 ano: Iniciante
// De 2-3 anos: Intermediario
// De 4-6 anos: Avançado
// De 7+ anos: Jedi Master

function experiencia(anos) {
    switch (true) {
        //parseFloat casta pra float (precisa disso pra poder passar "1" e não só 1), se der NaN é pq não era um número
        case isNaN(parseFloat(anos)):
            const reply = `"${anos}" não é um número de anos válido`;
            return reply
        case anos < 0:
            return "Como cê tem experiência negativa, rapá?"
        case anos <= 1:
            return "Iniciante"
        case anos <= 3:
            return "Intermediário"
        case anos < 7:
            return "Avançado"
        default:
            return "Jedi Master"
    }
}

const minhaExperiencia = experiencia(7);
console.log(minhaExperiencia)

// funções pra filtrar números pares e impares

const arrayNumeros = [7, 2, 8, 10, 9];

function numerosPares(numeros) {
    return numeros.filter((numero) => numero % 2 == 0)
}

function numerosImpares(numeros) {
    return numeros.filter((numero) => numero % 2 == 1)
}

const apenasPares = numerosPares(arrayNumeros);
const apenasImpares = numerosImpares(arrayNumeros);

console.log(apenasPares);
console.log(apenasImpares);