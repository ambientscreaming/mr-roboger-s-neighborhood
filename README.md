describe: numberToConvertedList()

test: it returns the same number that the user input
code: numberToConvertedList(13);
expected output: 13

test: it displays all of the numbers up to and including the user's inputted number on the webpage
code: numberToConvertedList(13);
expected output: 1,2,3,4,5,6,7,8,9,10,11,12,13

describe: shouldReturnBeep

test: it returns true if the number is 1
code: shouldReturnBeep(1)
expected output: true

test: it replaces the number 1 with the word "beep"
code: shouldReturnBeep(1)
expected output: "beep"

test: it replaces the number 1 with beep regardless of placement
code: shouldReturnBeep(21)
expected output: "0,beep,2,3,4,5,6,7,8,9,beep,beep,beep,beep,beep,beep,beep,beep,beep,beep,20,beep"

describe: shouldReturnBoop

test: it replaces the number 2 with "boop"
code: shouldReturnBoop(10)
expected output: "0,beep,boop,3,4,5,6,7,8,9,beep"

describe: shouldReturnBeMyNeighbor

test: it replaces the number 3 with "won't you be my neighbor?"
code: shouldReturnBoop(10)
expected output: "0,beep,boop,won't you be my neighbor,4,5,6,7,8,9,beep"

<!-- The number 13 should be replaced with "Won't you be my neighbor?"
The number 12 should be replaced with "Boop!".
The number 23 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop!". -->
