let LowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "m",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let specialCharacters = [
  "@",
  "%",
  "+",
  "',",
  "'",
  "!",
  "#",
  "$",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
];
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordOptions() {
  let length = parseInt(
    prompt("Enter How Many Characters Would You Like Your Password To Contain")
  );
  if (isNaN(length) === true) {
    alert("Please Provide Password Length As A Number");
    return;
  }

  if (length < 8) {
    alert("Password Must Be 8 Characters Or More");
  }
  if (length > 128) {
    alert("Password Length Must Be Less Than 129 Characters");
  }
  let hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lower case characters."
  );
  let hasUpperCaseCharacters = confirm(
    "Click OK to confirm including UPPER CASE characters."
  );
  let hasSpecialCharacters = confirm(
    "Click OK to confirm including  *&^Special^&* characters."
  );
  let hasNumericCharacters = confirm(
    "Click OK to confirm including Numeric characters."
  );
  if (
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false
  ) {
    alert("must select one chractyer type");
  }

  var getPasswordOptions = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
  };
}

function getRandom(arr) {
  let Index = Math.floor(Math.random() * arr.length);
  let Element = arr[Index];
}
