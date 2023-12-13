// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
let greet = getInput(1)
let userFirstName = getInput(2)
let userLastName = getInput(3)
console.log(greet +" " + userFirstName + " " + userLastName)
console.log(greet + " " + userFirstName.toUpperCase() + " " + userLastName.toUpperCase() + ", " + "your name is all caps!")
console.log(userFirstName[0] + ". " + userLastName[0] + ". are these your initials?")
console.log(userFirstName[0].toLowercase() + userLastName.toLowerCase() + ".prsvr@gmail.com")






//let userFirstName  = getInput(1)
//let userLastName = getInput(2)
//let age = getInput(3)
//console.log(userFirstName + " " + userLastName, age)
//let fullName = firstName + " " + lastName