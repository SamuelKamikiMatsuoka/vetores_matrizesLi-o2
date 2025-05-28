let TrintaNumeros = [];
let contador = 0;

for (let index = 0; index < 30; index++) {
  TrintaNumeros = Math.floor(Math.random() * 15) + 1;
}
let numero = parseInt(prompt("Digite o número que você quer  (1 até 15):"));

for (let index = 0; index < 30; index++) {
  if (TrintaNumeros[index] === numero) {
    console.log(`posição está no ${index} `);
    contador++;
  }
}

console.log(`o numero  ${numero} apareceu ${contador} vezes `);
