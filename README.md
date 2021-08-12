<button onclick="diferenciar()">Click me</button>

<script >
function diferenciar(params) {
  
  
let numberOne = parseInt(window.prompt("Digite o primeiro numero"));
let numberTwo = parseInt(window.prompt("Digite o segundo numero"));
let numberThree = parseInt(window.prompt("Digite o terceiro numero"));
 
// encontar menor
 if (numberOne < numberTwo) {
    if (numberOne < numberThree)
    console.log(" O menor é  o ", numberOne);  
}
else {
    if (numberTwo < numberThree){
        console.log(" O menor é  o ", numberTwo);   
     }else
    console.log(" O menor é  o ", numberThree);   
}
// encontrar o maior
if (numberOne > numberTwo) {
    if (numberOne > numberThree)
    console.log(" O maior é  o ", numberOne); 
    else
    console.log(" O maior é  o ", numberOne); 
}
else {
    if (numberTwo > numberThree)
    console.log(" O maior é  o ", numberTwo);  
    else
    console.log(" O maior é  o ", numberThree);  
}
 }
  </script>





<p align="left">  <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
</div>
