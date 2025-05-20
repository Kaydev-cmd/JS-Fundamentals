const arguments = process.argv.slice(2);
if (arguments.length === 0) {
  console.log("No arguments found");
} else if (arguments.length === 1) {
  console.log("Argument found");
} else {
  console.log("Aruguments found");
}

console.log(arguments);
