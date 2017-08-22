// create a loop that makes calls to console.log and outputs a triangle
var triangle = "#"
for (x = 0; x < 10; x++) {
  console.log(triangle);
  triangle += "#"
}

// write a program that prints numbers from 1 to 100. For those divisible by 3 print "Fizz", by 5 "Buzz", both "FizzBuzz", else the number.
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(i);
  }
}


// write a program that prints a string of an 8 x 8 grid using new line characters to separate lines. it should look like a chessboard with white squares being spaces.
var size = 8;
var board = "";
for (h = 0; h < size; h++) {
  for (j = 0; j < size; j++) {
    if ((h + j) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);
