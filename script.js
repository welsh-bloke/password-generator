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
  useNumericCharacters: false,
  useLowerCaseCharacters: false,
  useUpperCaseCharacters: false,
  useSpecialCharacters: false,
  inputNotEntered: function(input) {
    return input === '';
  },
  inputIsNotANumber: function(input) {
    return isNaN(input);
  },
  lengthIsTooShort: function(input) {
    return input < 10;
  },
  lengthIsTooLong: function(input) {
    return input > 64;
  },
  invalidInput: function() {
    return this.inputNotEntered || this.inputIsNotANumber || this.lengthIsTooShort || this.lengthIsTooLong;
  },
  noCharacterTypeSelected: function() {
    return !this.useLowerCaseCharacters && !this.useUpperCaseCharacters && !this.useSpecialCharacters && !this.useNumericCharacters;
  }
};

// Function to prompt user for password options
function getPasswordOptions() {
  while(options.noCharacterTypeSelected()) {
    inputNumberOfCharacters = prompt('Please choose the number of characters for your password (between 10 and 64 inclusive)');

    if (options.inputNotEntered(inputNumberOfCharacters)) {
      alert('You did not enter a enter a value for the number of characters. Please try again');
      continue;
    } else if (options.inputIsNotANumber(inputNumberOfCharacters)) {
      alert('You did not enter a number. Please try again');
      continue;
    } else if (options.lengthIsTooShort(inputNumberOfCharacters)) {
      alert('Your password must be at least 10 characters. Please try again');
      continue;
    } else if (options.lengthIsTooLong(inputNumberOfCharacters)) {
      alert('Your password must be less than 65 characters. Please try again');
      continue;
    } else {
      options.numberOfCharacters = inputNumberOfCharacters;
      while(options.noCharacterTypeSelected()) {
        options.useNumericCharacters = confirm('Would you like to include numeric characters)');
        if (options.useNumericCharacters) {
          chosenCharactersArray.push(numericCharacters);
        }
        options.useLowerCaseCharacters = confirm('Would you like to include lower case characters)');
        if (options.useLowerCaseCharacters) {
          chosenCharactersArray.push(lowerCasedCharacters);
        }
        options.useUpperCaseCharacters = confirm('Would you like to include upper case characters)');
        if (options.useUpperCaseCharacters) {
          chosenCharactersArray.push(upperCasedCharacters);
        }
        options.useSpecialCharacters = confirm('Would you like to include special characters)');
        if (options.useSpecialCharacters) {
          chosenCharactersArray.push(specialCharacters);
        }

        if (options.noCharacterTypeSelected()) {
          alert('You must choose at least 1 character type. Please try again');
          continue;
        }
      }
    }
  }

  return inputNumberOfCharacters;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Array to hold user choices
let chosenCharactersArray = [];

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  password = '';

  while (options.numberOfCharacters > 0) {
    chosenCharactersArray.forEach(arr => {
      if (options.numberOfCharacters > 0) {
        password += getRandom(arr);
      }

      options.numberOfCharacters -= 1;
    })
  }

  return (`Your secure password is ${password}`);
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
