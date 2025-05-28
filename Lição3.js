let NumerosLista = [];
let numero;
let contador = 0;


for (let index = 0; index < 30; index++) {
  NumerosLista[index] = Math.floor(Math.random() * 15) + 1;
}


numero = parseInt(prompt("Digite um número (numero) para buscar no NumerosLista:"));


for (contagem = 0; contagem < 30; contagem++) {
  if (NumerosLista[contagem] === numero) {
    console.log(`numero encontrada na posição:   ${contagem}`);
    contador++;
  }
}

console.log(`A chave apareceu  ${contador}  vezes`);