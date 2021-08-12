function diferenciar() {
  let TimeA = parseInt(window.prompt("Quantos gols fez o time A ? "));
  let TimeB = parseInt(window.prompt("Quantos gols fez o time B ?"));

  if (TimeA == TimeB) {
    document.write("Empate");
  } else if (TimeA > TimeB) {
    document.write("vencedor time A,pois fez ", TimeA, " Gols ");
  } else document.write(" vencedor time B pois fez ", TimeB, " Gols ");
}
