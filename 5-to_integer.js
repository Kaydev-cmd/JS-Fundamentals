const arguments = process.argv.slice(2);
const num = Number(arguments[0]);

if (!isNaN(num) && Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
