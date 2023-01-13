// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 

// Write password to the #password input
function writePassword() {
  generatePassword();

  if (generatePassword){
  var pass = getRandom();
  var passwordText = document.querySelector('#password');
  passwordText.value = pass;
} else {
  passwordText.value = "";
}
}

var passLength = 0;
var passwordArr = [];

// Function to prompt user for password options
// Function to generate password with user input
function generatePassword() {
  passLength = parseInt(prompt("Please insert a number between 10 and 64 for your password length."));

  if (passLength >= 10 && passLength <=64) {
    console.log (passLength);
  } else {
    alert ("Please pick a number between 10 and 64.");
    return false;
  }

  if (confirm("Would you like special characters to be included in your password?")) {
    passwordArr = passwordArr.concat(specialCharacters);
  }
  if (confirm("Would you like numbers to be included in your password")) {
    passwordArr = passwordArr.concat(numericCharacters);
  }
  if (confirm("Would you like lower cased letters to be included in your password?")) {
    passwordArr = passwordArr.concat(lowerCasedCharacters);
  }
  if (confirm("Would you like upper cased letters to be included in your password?")) {
    passwordArr = passwordArr.concat(upperCasedCharacters);
  } 
  if (!confirm) {
    alert("At least one type of characters should be included! \n\nIf you still want to generate random password, you can click Generate Password and choose at lease one character type.");
  }
}



  // Function for getting a random element from an array
  function getRandom() {
    var password = "";

    if(passLength >= 10 && passLength <=64) {
      for(var i = 0; i < passLength; i++) {
          var characters = Math.floor(Math.random() * passwordArr.length);
       password += passwordArr[characters];
     }
     return password;
    }else{
      return "";
    }
  }








