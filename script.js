// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

  function generatePassword() {

    // validate how many characters in code
    while (true) {
      var passLength = prompt("Please enter a number between 8 and 128.");
      console.log(typeof passLength);
      if (passLength >= 8 && passLength <= 128) {
        console.log("length " + passLength);
        break;
      }

      // cancel displays alert, breaks while loop
      else if (!passLength) {
        alert("You have cancelled.");
        break;
      }

      // rejects string
      else if (passLength === "") {
        alert("Please enter a number to continue.");
        continue;
      }

      // all other options
      else {
        alert("Please enter a number to continue.");
        continue;
      }
    }

    //if statement to run prompts once number is validated.  
    if (passLength >= 8 && passLength <= 128) {

      var lower = confirm("Should your password include lower case letters?");
      console.log(lower);
      var upper = confirm("Should your password include upper case letters?");
      console.log(upper);
      var num = confirm("Should your password include numbers?");
      console.log(num);
      var specChar = confirm("Should your password include special characters?");
      console.log(specChar);
    }

    // turns passLength string into number
    var length = parseInt(passLength, 10);
    console.log(typeof length);

    var resultsArray = []

    
      
      if (lower === true) {
        resultsArray = resultsArray.concat(lowerCasedCharacters);
        console.log(resultsArray + "lasdf");
      }

       if (upper === true) {
        resultsArray = resultsArray.concat(upperCasedCharacters);
      }

       if (num === true) {
        resultsArray = resultsArray.concat(numericCharacters);
      }

       if (specChar === true) {
        resultsArray = resultsArray.concat(specialCharacters);
      }

      else {
      alert("No valid selection made");
    }

    var randomPass = ""

    for (let i = 0; i < length; i++) {
      randomPass = randomPass + resultsArray[Math.floor(Math.random()*resultsArray.length)]
      console.log(randomPass);

    }

    return randomPass

  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

