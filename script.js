const prompt = require("prompt-sync")({sigint:false});

for (i=1 ; i!=0 ; i) {
let a = prompt("First number: ");
let b = prompt("Second number: ");

calcAddition(a , b , c);
}

function calcAddition (a , b) {
    let numberOne = Number(a);
    let numberTwo = Number(b);
    let sum = numberOne + numberTwo

    console.log(`${numberOne} + ${numberTwo} = ${sum}`);
}