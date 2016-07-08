//given n, find the nth fibonacci number

//take in first argument, this will be n
var n = Number(process.argv[2]);

if(!Number.isInteger(n) || n < 1 || process.argv.length > 3){
  console.log("Sorry - input must be 1) a single integer, 2) greater than 0.");
  process.exit(1);
}

console.log("Your input was " + n + ".");

if(n > 79){
  console.log("NOTE: this tool will only return a valid result up to the 79th Fibonacci number, because Javascript.");
}

//here, we're defining the special cases for n = 1 and n = 2, plus giving ourselves a starting place if n >= 3!

var fibTwoBack = 0;
var fibOneBack = 1;
var fibn;

//handle the special cases!
if(n == 1){
  console.log("The Fibonacci number at position 1 is 0. Surprise!");
  process.exit(1);
}

if(n == 2){
  console.log("The Fibonacci number at position 2 is 1. Surprise!");
  process.exit(1);
}

//handle other cases!
for(i = 3; i <= n; i++){
  fibn = fibTwoBack + fibOneBack;
  fibTwoBack = fibOneBack;
  fibOneBack = fibn;
}

console.log("The Fibonacci number at position " + n + " is " + fibn + "!");
process.exit(1);