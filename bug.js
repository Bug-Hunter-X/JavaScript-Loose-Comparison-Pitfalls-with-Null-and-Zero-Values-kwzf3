function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This handles null values correctly
  }
  return a + b;
}

console.log(foo(null, 5)); // Outputs 0
console.log(foo(5, null)); // Outputs 0
console.log(foo(5, 5)); // Outputs 10

function bar(a, b) {
  if (!a || !b) {
    return 0; // This is the buggy part
  }
  return a + b;
}

console.log(bar(null, 5)); // Outputs 0
console.log(bar(5, null)); // Outputs 0
console.log(bar(5, 5)); // Outputs 10
console.log(bar(0, 5)); //Outputs 0, unexpected!