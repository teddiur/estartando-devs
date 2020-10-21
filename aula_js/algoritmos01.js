/*
Pegue um array de inteiros e retorne a soma de todos os elementos.
### ENTRADA EXEMPLO
[3, 7, 1]

### SAIDA EXEMPLO
11
*/
// const intList = [3, 7, 1]

// function arraySum(list) {
//   let totalSum = 0;
//   list.forEach((element) => {
//     totalSum += element
//   });

//   return totalSum
// }

// console.log(arraySum(intList))

/*
Receba um array de aluno com as notas 4 dos bimestres, e retorne um array contendo o nome, a media de cada aluno e informaçao se o mesmo foi aprovado ou reprovado, sabendo que as notas podem variar de 0 a 10 e a média minima para aprovaçao é 7.
### ENTRADA EXEMPLO
[
  {
    nome: "Jonas",
    notas: [1, 4, 10, 8],
  },
  {
    nome: "Adam",
    notas: [10, 5, 6, 3],
  },
  {
    nome: "Marta",
    notas: [7, 6, 5, 8],
  },
];

### SAIDA EXEMPLO
[
  {
    nome: "Jonas",
    media: 5.75,
    status: "reprovado"
  },
  {
    nome: "Adam",
    media: 6,
    status: "reprovado"
  },
  {
    nome: "Marta",
    media: 7.5,
    status: "aprovado"
  },
];
*/
//input data
const students = [
  {
    nome: "Jonas",
    notas: [1, 4, 10, 8],
  },
  {
    nome: "Adam",
    notas: [10, 5, 6, 3],
  },
  {
    nome: "Marta",
    notas: [7, 6, 7, 8],
  },
];

function calcMean(numbers) {
  // filters out falsy values
  numbers = numbers.filter((element) => element);
  numbersSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  const mean = numbersSum / numbers.length;
  return mean;
}

//object constructor
function makeReport(student) {
  this.nome = student.nome;
  this.media = calcMean(student.notas);
  this.status = this.media >= 7 ? "aprovado" : "reprovado";
}

const report = students.map((student) => new makeReport(student));

console.table(report, ['nome', 'media', 'status'])