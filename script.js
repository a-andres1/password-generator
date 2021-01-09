// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables 

var characters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"  //variable for code that grabs special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



    function generatePassword() {

      // Prompts and confirms for password length and character choices

      // validate how many characters in code
      while (true) {
        var passLength = prompt("Please enter a number between 8 and 128.");
        console.log(passLength);
        if (passLength >= 8 && passLength <= 128) {
          console.log("length " + passLength);
          break;
        }

        else if (!passLength) {
          alert("You have cancelled.");
          break;
        }

        else if (passLength === "") {
          alert("Please enter a number to continue.");
          continue;
        }

        else if (passLength <= 7) {
          alert("Please enter a number between 8 and 128.");
          continue;
        }

        else {
          alert("Please enter a number to continue.");
          continue;
        }
      }
      
      var lower = confirm("Should your password include lower case letters?");
      console.log (lower);
      var upper = confirm("Should your passwrod include upper case letters?");
      console.log (upper);
      var num = confirm("Should your password include numbers?");
      console.log (num);
      var specChar = confirm("Should your password include special characters?");
      console.log (specChar);

      // Functions for getting random numbers and letters
      function randomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }

      function randomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }

      function randomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      }

      function randomChar () {
        entity1 = Math.ceil(characters.length * Math.random() * Math.random());
        character = entity1
        return String.characters.charAt(entity1)
      }


    }


  }


// Code that gets random punctuation - goes with var characters
 //to print punctuation use this


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console logs to check code


console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
console.log(characters.charAt(entity1));


