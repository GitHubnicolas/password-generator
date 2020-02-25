//DOM elements / DOM - Document Object Model / When a web page is loaded, the browser creates a DOM of the page // DOM can be used by Javascript to manupilate the HTML and CSS in this application

// These will be used to generate the password that  will be outputted 
var resultEL = document.getElementById("password");
var lengthEL = document.getElementById("length");
var uppercaseEL = document.getElementById("uppercase");
var lowercaseEL = document.getElementById("lowercase");
var numbersEL = document.getElementById("numbers");
var symbolsEL = document.getElementById("symbols");

var generateEL = document.getElementById("generate");

//This is the generate button that will generate the password
var generateBtn = document.querySelector("#generate");


//Putting all the functions that will be used for randomly generated password into an object
var randomFunc = {
 //Adding equivalent keys of all the functions to the this object 
   lower: getRandomLower,
   upper: getRandomUpper,
   number: getRandomNumber,
   symbol: getRandomSymbols
};

// This is the generate password click event - when the button is clicked the password should be generated
// An arrow function is used here => it allow to write shorter function syntax - w3schools
generateBtn.addEventListener('click', () => {

//If certain options are selected the password should be generated accordingly / elements should be created for every password requirement option that can be selected

// This is for the number of characters input - the requirement are 8 - 128 characters, the user has to input the number of characers via the "Password length" textbox
// The plus sign is added in front to make this a number not a string // the .value gets the value that was entered by the user
 var length = +lengthEL.value;
 //console.log( typeof length);

 // the .checked will be either true or false depending on if he user has it checked or not 
 var hasLower = lowercaseEL.checked;
 var hasUpper = uppercaseEL.checked;
 var hasNumber = numbersEL.checked;
 var hasSymbol = symbolsEL.checked;
 //console.log(hasLower, hasUpper, hasNumber, hasSymbol);

 //This is to pass the above information when the generate password is clicked to use this infromation to generate a password and pass it to the output
 resultEL.innerText = generatedPassword (
   hasLower, 
   hasUpper, 
   hasNumber, 
   hasSymbol, 
   length
   );

});


// This is a function to generate the password

function generatedPassword(lower, upper, number, symbol, length) {

//need to initialize a password variable 
//need to filter out unchecked types 
//loop over the length and call a generator function for each type
//add the final password to the password variable and return in

var generatedPassword = '';

//This is counting the number of checked values
var typesCount = lower + upper + number + symbol;
//console.log("typesCount:", typesCount);

//The items in the array are wrapped in curly braces to get the value of true or false for each one
// .filter is being used to filter out all the non true selections, what it does is loop through each item and based on the value it will filter out all that are false
var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter

( 
  item => Object.values(item)[0]
);
//console.log("typesArr: ", typesArr);

//If none are checked we don't want to generate a password, this is to check if none are checked
//If typesAcount = 0, in other words if nothing is selected, we want to return nothing
if(typesCount === 0){
 return '';
}

//Need to loop over the length to generate the password
for (i = 0; i < length; i += typesCount){
 //Here we are looping through each checkbox
  typesArr.forEach(type =>{
  
// Here I am referencing the randomFunc we created above and it's "keys" that were created

   var funcName = Object.keys(type)[0];
// console.log("funcName: ", funcName);

 // This is a variable that was created above with an empty string, we are appending onto it randomFunc   
   generatedPassword += randomFunc[funcName] ();

 });
}

var finalPassword = generatedPassword.slice(0, length);

return finalPassword;

}

// Came with the ofiginal file - was used for reference
// // Write password to the #password input
// function writePassword() {
//var password = generatedPassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



//Generating random lower case characters to be used for the Random Password Generator
function getRandomLower() {

// This is referencing a character set, which can be found here http://www.net-comber.com/charset.html - the slower case chracters are in positions 129 to 159
// Math.random generates a random decimal number // Math.floor rounds down and gets rid of the decimals // We use the number 26 because there are 26 letter in the alphabet and we want to generate a random number between 1 and 26 // we add 97 because the lower characters range from positions 129 to 159 in the chracter set
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Used the below to test the above random lower case characters being generated
//console.log(getRandomLower());

//Very similar to generating a random lower case character above, just changing 97 to 65 to adjust the range or random characters we want to pull
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
// Used the below to test the above random Upper case characters being generated
//console.log(getRandomUpper());


//Similar to the letter chracter generator but there are 10 random number we are trying to generate, so set the multiplier to 10, also updating the number being added to 48 because the number 0 starts at 48 in the chracter set
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log(getRandomNumber());

//Generating random sybmols here

function getRandomSymbols() {

  //const is being used to define the symbols variable, const is valuable to use here because when using const the variable can not be re-assigned 
  const symbols = "!@#$%^&*()_+{}[]<>=/,.";

  //Generating a random symbol from the defined symbols in the symbols variable
  return symbols [Math.floor(Math.random() * symbols.length)];
}
//console.log(getRandomSymbols());






//References https://codepen.io/FlorinPop17/pen/BaBePej  //  https://www.youtube.com/watch?v=duNmhKgtcsI // https://www.w3schools.com/ // http://www.net-comber.com/charset.html //