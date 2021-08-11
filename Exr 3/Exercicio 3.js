function diferenciar() {
  let number = parseInt(window.prompt("diga um numero:"));

  if (number % 2 == 0) {
    document.write(number, " é par ");
  } else {
    document.write(number, " é impar ");
  }
}
