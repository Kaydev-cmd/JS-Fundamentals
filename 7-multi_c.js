const arguments = process.argv.slice(2);
const num = Number(arguments[0]);

if (!Number.isInteger(num)) {
  console.log("Missing number of occurences");
} else {
  let i = 0;
  while (i < num) {
    console.log("C is fun");
    i++;
  }
}
