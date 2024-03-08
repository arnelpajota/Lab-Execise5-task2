
var firstString = prompt("Enter the first string:");
var secondString = prompt("Enter the second string:");


var concatenatedString = firstString + secondString;

var concatenatedLength = concatenatedString.length;
var upperCaseString = concatenatedString.toUpperCase();
var lowerCaseString = concatenatedString.toLowerCase();
var substringResult = concatenatedString.substring(0, 5); 


var interpolationResult = `${firstString} and ${secondString} were concatenated to form ${concatenatedString}.`;


var areEqual = firstString === secondString;


var stringArray = concatenatedString.split(" "); 


console.log("Concatenated String:", concatenatedString);
console.log("Concatenated String Length:", concatenatedLength);
console.log("Uppercase String:", upperCaseString);
console.log("Lowercase String:", lowerCaseString);
console.log("Substring Result:", substringResult);
console.log("String Interpolation:", interpolationResult);
console.log("String Comparison Result:", areEqual ? "The strings are equal." : "The strings are not equal.");
console.log("String Array:", stringArray);
