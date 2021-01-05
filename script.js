// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables 

var characters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"  //variable for code that grabs special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Functions
  function randomLower() {
    return String.fromCharCode(Math.floor(Math.random () *26) + 97);
  }
  
  function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random () *26) + 65);
  } 
  
  function randomNumber () {
    return String.fromCharCode(Math.floor(Math.random () *10) + 48);
  }

   
  

  

}

// Code that gets random punctuation - goes with var characters
entity1 = Math.ceil(characters.length * Math.random()*Math.random());
character = entity1
characters.charAt( entity1 ) //to print code use this


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console logs to check code


console.log(String.fromCharCode(Math.floor(Math.random () *26) + 97));
console.log(String.fromCharCode(Math.floor(Math.random () *26) + 65));
console.log(String.fromCharCode(Math.floor(Math.random () *10) + 48));
console.log(characters.charAt( entity1 ));

