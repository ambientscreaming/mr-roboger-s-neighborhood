describe: numberToConvertedList()

test: it displays all of the numbers up to and including the user's inputted number on the webpage
code: numberToConvertedList(13);
expected output: [0, "beep", "boop", "won't you be my neighbor", 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "won't you be my neighbor?"]

test: it prioritizes replacing the number 3 over the number 1
code: numberToConvertedList(3);
expected output: [0,"beep","boop","won't you be my neighbor?"]

test: it substitutes "beep" for the number 1
code: numberToConvertedList(1);
expected output: [0,"beep"]

test: it substitutes "boop" for the number 2
code: numberToConvertedList(2);
expected output: [0,"beep", "boop"]

describe: shouldSubstituteNumber

test: it returns true if the number is 1
code: shouldSubstituteNumber(1, "1");
expected output: true

test: it returns true if the number contains the requested number
code: shouldSubstituteNumber(21, "1");
expected output: true

test: it returns false if requested number is not in the original number
code: shouldSubstituteNumber(10, "2");
expected output: false


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
