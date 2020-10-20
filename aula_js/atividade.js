/*# Exercicios Javascript

1 - Para passar no Colegio "Crias do Devs" os alunos precisam de media 8.
Crie um código que tenha uma variavel com o valor da media do aluno no semestre retorne true ou false de acordo com o resultado do aluno no colegio.

---

2 - Verifique se as afirmativas estão certas, caso contrario justifique com uma prova real.
Dica: Use o `typeof` para as provas reais.

```js
// A) O tipo da constante `typeNumber` é number.
const typeNumber = "10";


// B) O valor da constante `y` é 149.
const y = 147 + "2";


// C) O tipo da constante `x` é number.
const x = 13 > 20;


// D) O valor da constante `s` é "Estartando Devs".
const s = "Estartando " + "Devs";

```
*/

// 1 -
meanScores = [7, 9];

for (let student = 0; student < 2; student++) {
    console.log("Aluno", student, " teve nota", meanScores[student], ". Passou?", meanScores[student] >= 8)
};

// 2-A) Falso, typeNumber é uma string
const typeNumber = "10";
console.log(typeof typeNumber);

//2-B) Falso, o valor de y é "1472"
const y = 147 + "2";
console.log(y);

// 2-C) Falso, x é um boolean
const x = 13 > 20;
console.log(typeof x);

// 2-D) Verdadeiro
const s = "Estartando " + "Devs";
console.log(s)

bla = [1, 4, 6, 7, 11]

