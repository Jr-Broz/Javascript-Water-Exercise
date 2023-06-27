/*
Instructions
Your task is to convert a number into a string that contains raindrop sounds corresponding to certain potential factors.

The rules of raindrops are that if a given number:

has 3 as a factor, add 'Pling' to the result.
has 5 as a factor, add 'Plang' to the result.
has 7 as a factor, add 'Plong' to the result.
does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.*/
let userInput = prompt("Write a number");

function water() {   
let pling =   "pling";
let plang =   "plang";
let plong =   "plong";

  
if(userInput % 3 == 0){
 console.log(userInput / 3 + " " +  pling);  
}

if(userInput % 5 == 0){
  console.log(userInput / 5 + " " + plang);
}

if(userInput % 7 == 0){
  console.log(userInput /7 + " " + plong);
}
 else if (userInput % 3 !== 0 && userInput % 5 !== 0 && userInput % 7 !== 0) {


   console.log(userInput);
}
}
water();
