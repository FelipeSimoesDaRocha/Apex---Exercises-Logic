function diferenciar() {
    let salario = (window.prompt('digite um numero'))
    let bonus = 0.0
  
    if (salario > 1000) { bonus = salario * 0.10; }
      else { bonus = salario * 0.15;}
  
      document.write(bonus)
    }  