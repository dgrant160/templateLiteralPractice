// Name:Dylan Grant
// Date:09/23/20
// Assignment: Template Literal Practice

////////////////////////Pt. 1////////////////////////
// create a var that accepts a first name as a prompt
//let firstName = prompt("please enter your first name");
//firstName;
let firstName = prompt(`please enter your first name`);
firstName;
// create a var that accepts a last name as a prompt
//let lastName = prompt("please enter your last name");
//lastName;
let lastName = prompt(`please enter your last name`);
lastName;
// Create a variable that will hold a score and a var that will hold a full name 
//let fullName = firstName + " " + lastName;
let fullName = `${firstName} ${lastName}`;
let score = 0;
// create a var that adds the full name var and score in a message
//let highScore =  fullName + " has a core of " + score;
let highScore = `${fullName}has a score of ${score}.`;

////////////////////////Pt. 2////////////////////////
//comment out the lines above then create two var's that hold numbers
let num1 = 3;
let num2 = 6;

//create an add var that adds both vars
//let num3 = num1 + num2;
let num3 = `${num1} + ${num2}`;

//console log the newly created add var
//console.log(num3);
console.log(`${num3}`);
//console log 3 string's using concatination that say "concatinating is easy""when using template literals,""I can even embed numbers and not have to worry about spacing!"
//console.log("concatinating is easy "+"when using template literals, "+"I can even embed numbers and not have to worry about spacing!");
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing!`);
//console log the three strings above and add a third string that includes the add var
//console.log("concatinating is easy "+"when using template literals, "+"I can even embed numbers and not have to worry about spacing! " + num3);
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing! ${num3}`);