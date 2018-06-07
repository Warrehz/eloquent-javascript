// regex constructor
let re1 = new RegExp("abc");
// this notation treats backlashes differently
let re2 = /abc/;

// tests if the regex is in a given string
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

// square brackets lets you test for any character within the brackets
// a dash (-) between brackets indicates a range
console.log(/[0123456789]/.test("1999"));
// both test for any number between 0 and 9 within the given string
console.log(/[0-9]/.test("1999"));

// a date time format like 10-08-2017 15:20
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2018 04:00"));
console.log(dateTime.test("30-jan-2018 07:00"));

// anything but binary
let notBinary = /[^01]/;
console.log(notBinary.test("010101010101010101010101"));
console.log(notBinary.test("0101012010101010101013"));

// plus sign after something means it can occur one or more times
console.log(/\d+/.test("123"));
// asterisk * is similar but means that it can match zero times as well
console.log(/\d*/.test("abc"));

// question mark ? makes the previous character optional
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

// braces {} can indicate a pattern can occur a specified number of times
let newDateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(newDateTime.test("1-12-2019 3:23"));

// finds and returns the first element that matches the regex
console.log("100 three four 200".match(/\d+/));

// built in class for dates
console.log(new Date());
