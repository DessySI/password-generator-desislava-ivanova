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




// Function to prompt user for password options

let passwordArr = [];

function generatePassword() {
var includeCharType = '';
var includeSC = confirm("Would you like special characters to be included in your password?") ;
var includeN = confirm("Would you like numbers to be included in your password?");
var includeLCC = confirm("Would you like lower cased letters to be included in your password?");
var includeUCC = confirm("Would you like upper cased letters to be included in your password?");

if (includeSC) {
  includeCharType += includeSC;
  passwordArr.push(...specialCharacters);
  console.log(passwordArr);
};
 if (includeN) {
  includeCharType += includeN;
  passwordArr.push(...numericCharacters);
  console.log(passwordArr);
};
 if (includeLCC) {
  includeCharType += includeLCC;
  passwordArr.push(...lowerCasedCharacters);
  console.log(passwordArr);
};
 if (includeUCC) {
  includeCharType += includeUCC;
  passwordArr.push(...upperCasedCharacters);
  console.log(passwordArr);
};
 if (includeSC == false && includeN == false && includeLCC == false && includeUCC == false) {
  alert("At least one type of characters should be included! \n\nIf you still want to generate random password, you can click Generate Password and choose at lease one character type.");
  return "";
}
}



// Function for getting a random element from an array
function getRandom(Characters, Length) {
  var password = "";
    for (i = 0; i < Length; i++){
     password += Characters[Math.random() * Characters.length]
   }
   return password;
}

  
// Function to generate password with user input
function generatePassword() {
  let passLength = prompt("Please insert a number between 10 and 64 for your password length.");
  passLength = parseInt(passLength);

  if (passLength >= 10 && passLength <=64) {
    console.log (passLength);
  } else {
    alert ("Please pick a number between 10 and 64.");
    console.log ("Try again!");
  };

  return getRandom(passwordArr, passLength);
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 