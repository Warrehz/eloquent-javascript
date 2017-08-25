// write a range function that takes two arguments, start and end, and returns an array of numbers from start up to and including end
function range(start, end) {
  rangeArray = [];
  for (i =  start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}
console.log(range(1, 10));

// write a function that takes an array and find the sum
function sumArray(array) {
  total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sumArray(range(1, 10)));

// modify the range function to take a third argument, which will be how much to increment by
function rangeWithStep(start, end, inc) {
  step = inc || 1;
  rangeArray = [];
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  }
  else {
    for (i = start; i >= end; i += step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}
console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(5, 2, -1));

// write a function "inverseArray" that takes an array and produces a new array in inverse order
function inverseArray(array) {
  oldArray = array;
  newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(oldArray[i]);
  }
  return newArray;
}
console.log(inverseArray(["A", "B", "C"]));

// write a function "reverseArrayInPlace" that does the same as "inverseArray" only, it modifies the array given in the argument rather than creating a new one
function reverseArrayInPlace(array) {
  for (i = 0; i <= Math.floor(array.length / 2); i++) {
    a = array[i];
    b = array[array.length - 1 - i];
    array[i] = b;
    array[array.length - 1 - i] = a;
  }
  return array;
}
var arrayValue = [1, 2, 3, 4 , 5];
console.log(reverseArrayInPlace(arrayValue));
