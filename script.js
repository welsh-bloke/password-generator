// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// Password generation options
let options = {
  numberOfCharacters: 0,
  useLowerCaseCharacters: false,
  useUpperCaseCharacters: false,
  useSpecialCharacters: false,
  inputIsNotANumber: function(input) {
    return isNaN(input);
  },
  lengthIsTooShort: function(input) {
    return input < 10;
  },
  lengthIsTooLong: function(input) {
    return input > 64;
  },
};

// Function to prompt user for password options
function getPasswordOptions() {
  inputNumberOfCharacters = prompt('Please choose the number of characters for your password (between 10 and 64 inclusive)');

  if (options.inputIsNotANumber(inputNumberOfCharacters)) {
    alert('You did not enter a number');
    return;
  } else if (options.lengthIsTooShort(inputNumberOfCharacters)) {
    alert('Your password must be at least 10 characters');
    return;
  } else if (options.lengthIsTooLong(inputNumberOfCharacters)) {
    alert('Your password must be less than 65 characters');
    return
  }
  options.useLowerCaseCharacters = confirm('Would you like to include lower case characters)');
  options.useUpperCaseCharacters = confirm('Would you like to include upper case characters)');
  options.useSpecialCharacters = confirm('Would you like to include special characters)');
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log(options);

  // (1) prompt the user to:
  //    a) choose a password length between 10 and 64 characters inclusive
  //    b) choose if they want to include lowercase characters
  //    c) choose if they want to include uppercase characters
  //    d) choose if they want to include numeric characters
  //    e) choose if they want to include special characters

  // (2) validate the input
  //    a) validate that the password length between 10 and 64 characters inclusive
  //    b) validate that at least 1 type of character type is selected

  // (3) Generate the password

  // (4) alert the user of their password

  return `You chose ${options.numberOfCharacters} characters`;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

console.log(options);
