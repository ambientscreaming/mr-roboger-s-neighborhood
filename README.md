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

--------------------------- README ----------------------------------

# _Mister Robogers Neighborhood_

#### By _**K.B. github: @ambientscreaming**_

#### _An app that takes numbers in and gives you some weird little phrases in return! Happy roboting!_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_This app takes in numbers on your end and gives you a phrase of our my choice! Let me know when you find the pattern!_

## Setup/Installation Requirements

* _Open any web browser and paste this link:_
* _https://ambientscreaming.github.io/mr-roboger-s-neighborhood_
* _enter in any number_
* _click submit_
* _and try to identify the pattern!_

## Known Bugs

* _No known bugs! if you find any, please let me know asap!_

## License

_Any code contributions are welcome! I had plans to add some trolley animations to this, so if you'd like to put that in there, be my guest! Otherwise, this is for public use and enjoyment._

Copyright (c) _11/19/23_ _K.B. ambientscreaming@gmail.com_
