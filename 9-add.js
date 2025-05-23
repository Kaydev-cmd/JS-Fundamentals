const arguments = process.argv.slice(2);
const firstNumber = Number(arguments[0]);
const secondNumber = Number(arguments[1]);

function add(a, b) {
  return a + b;
}

console.log(add(firstNumber, secondNumber));
