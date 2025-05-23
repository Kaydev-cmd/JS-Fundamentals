const arguments = process.argv.slice(2);
const sizeOfSquare = Number(arguments[0]);

if (!Number.isInteger(sizeOfSquare)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < sizeOfSquare; i++) {
    console.log("X".repeat(sizeOfSquare));
  }
}
