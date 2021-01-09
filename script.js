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
    if (passLength >= 8 && passLength <=128){

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

    for (let i = 0; i = length;){
      if (lower === true){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }

      else if (upper === true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }

      else if (num === true) {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      }

      else if (specChar === true) {
        // Code that gets random punctuation - goes with var characters
        entity1 = Math.ceil(characters.length * Math.random() * Math.random());
        character = entity1
        return String.characters.charAt(entity1)
      }

      else {
        alert("No valid selection made");
        break;
  
      }


    }
  }
}

  






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


