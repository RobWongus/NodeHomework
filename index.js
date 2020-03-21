const inquirer = require("inquirer");
const api = require('./api.js');
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter Github username.",
            name: "Github username"
        },

        {
            type:"input",
            message: ""
        }
    ])

    .then(function(response) {
        console.log(response["Github username"]);

api.getUser(response["Github username"]);
    });
// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();

