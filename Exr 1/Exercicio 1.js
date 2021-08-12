function diferenciar() {
  
  let numberOne = parseInt(window.prompt("Digite um numero"));
  let numberTwo = parseInt(window.prompt("Digite outro numero"));

  if (numberOne > numberTwo) {
    document.write(numberOne, " é maior que ", numberTwo);
  } else if (numberOne < numberTwo) {
    document.write(numberOne, " é menor que ", numberTwo);
  } else {
    document.write("os numeros são iguais");
  }
}
