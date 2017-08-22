// write a function "min" that returns the lower value of two numbers
function min(a, b) {
  if (a > b) {
    return a
  }
  else {
    return b
  }
}
console.log(min(0, 10));
console.log(min(0, -10));

// write a recursive fuction "isEven" to determine if a number is even or odd. it should accept one parameter and return a boolean
function isEven(num) {
  if (num == 1) {
    return false;
  }
  else if(num == 2) {
    return true;
  }
  else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));

// write a function "countChar" that takes a string and returns how many there are in the string
function countChar(string, letter) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));
