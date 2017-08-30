// use the reduce method in combination with concat combine the array of arrays into a single array containing all of the elements
listOfNums = [[1, 2, 3], [4, 5], [6]];
console.log(listOfNums.reduce(function(a, b) {
   return a.concat(b);
}));
