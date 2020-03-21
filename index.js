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
            type: "input",
            message: "Title of repository",
            name: "title"
        },

        {
            type:"input",
            message: "Describe Your Repo.",
            name: "Description"
        },

        {
            type: "input",
            message: "How to install.",
            name: "installation"
        },

        {
            type: "input",
            message: "Instructions on how the application should be used.",
            name: "usage"
        },

        {
            type: "input",
            message: "usernames of contributers",
            name: "contributors"
        },
        
        {
            type: "input",
            message: "License the repo is using.",
            name: "license"
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

