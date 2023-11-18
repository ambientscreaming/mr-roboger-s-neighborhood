describe: numberToConvertedList()

test: it returns the same number that the user input
code: numberToConvertedList(13);
expected output: 13

test: it displays all of the numbers up to and including the user's inputted number on the webpage
code: numberToConvertedList(13);
expected output: 1,2,3,4,5,6,7,8,9,10,11,12,13

test: it prioritizes replacing the number 3 over the number 1
code: numberToConvertedList(13);
expected output: 0,beep,boop,won't you be my neighbor?,4,5,6,7,8,9,beep,beep,boop,won't you be my neighbor?

describe: shouldSubstituteNumber

test: it returns true if the number is 1
code: shouldSubstituteNumber(1, "1");
expected output: true

test: it replaces the number 1 with the word "beep"
code: shouldSubstituteNumber(1. "1");
expected output: beep

test: it replaces the number 1 with beep regardless of placement
code: shouldSubstituteNumber(21, "1");
expected output: "0,beep,2,3,4,5,6,7,8,9,beep,beep,beep,beep,beep,beep,beep,beep,beep,beep,20,beep"

test: it replaces the number 2 with "boop"
code: shouldSubstituteNumber(10, "2");
expected output: 0,beep,boop,3,4,5,6,7,8,9,beep

test: it replaces the number 3 with "won't you be my neighbor?"
code: shouldSubstituteNumber(10, "3");
expected output: 0,beep,boop,won't you be my neighbor,4,5,6,7,8,9,beep


