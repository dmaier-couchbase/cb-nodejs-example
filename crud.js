//Requirements
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout});
var cb = require('./cb.js');
var db;

//CRUD
function insertBook() {

	//TODO
}

function listBooks() {

	//TODO
}

function updateBook() {

	//TODO
}

function deleteBook() {

	//TODO
}

//Menu
function printMenu() {
  
  console.log("Welcome to CRUD demo using Node.js and Couchbase");

  console.log("1. Insert a new Book");
  console.log("2. List all the books");
  console.log("3. Update the book by ISBN");
  console.log("4. Delete the book by ISBN");
  console.log("5. Quit");

  rl.question("Enter your choice: ", function(answer){
    console.log("Choice entered is: " + answer);
	  switch(answer){
		  case "1":
			  insertBook();
			  break;
	          case "2":
			  listBooks();
			  break;
	          case "3":
			  updateBook();
			  break;
		  case "4":
			  deleteBook();
			  break;
		  case "5":
			  console.log("Press Ctrl+C to exit the program");
			  break;
	  }
  })}


  db = cb.connect(printMenu);
