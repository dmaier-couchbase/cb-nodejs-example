/*
 * input.js
 */

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout
});

//Ask the user for his name
rl.question("What's your name? ", function(answer){
  console.log("You entered: " + answer);
  console.log("Press Ctrl+C to terminate");
});
