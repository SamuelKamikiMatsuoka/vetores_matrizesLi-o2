let numeros = [];

for (let index = 0; index < 10; index++) {
  let numero = parseInt(prompt(`digite o  ${index + 1} numero`));
  numeros[index] = numero;
}
for (let index = 0; index < 10; index++) {
  if (numeros[index] % 2 === 0) {
    console.log(`numero ${numeros[index]} posição ${index}`);
  }
}
