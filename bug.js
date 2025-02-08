function foo(x){
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return 0; // Handle undefined case
  } else if (isNaN(x)) {
    return 0; // Handle NaN case
  } else {
    return x + 1; // Normal case
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(NaN));     // Output: 0
console.log(foo(5));      // Output: 6
console.log(foo('5'));   // Output: 6