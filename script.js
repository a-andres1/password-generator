// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(String.fromCharCode(Math.floor(Math.random () *26) + 97))
console.log(String.fromCharCode(Math.floor(Math.random () *26) + 65))
