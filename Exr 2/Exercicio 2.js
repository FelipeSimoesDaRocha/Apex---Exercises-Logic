
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