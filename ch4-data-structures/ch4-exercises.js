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

// write a function "arrayToList" that builds up a list sharing structure
function arrayToList(array) {
  var list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}
console.log(arrayToList([10, 20]));

// write a "listToArray" function that produces an array when given a list
function listToArray(list) {
  array = [];
  for (node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

// write a prepend function that takes a value and a list and puts that value at the beginning of the list
function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
};
console.log(prepend(10, prepend(20, null)));

// write a function "nth", that takes a list and a number and returns that element at a given position in the list or undefined if there is no such element
function nth(list, n) {
  if (!list) {
    return undefined;
  }
  else if (n == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, n - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
