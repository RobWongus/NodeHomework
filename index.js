const inquirer = require("inquirer");
const api = require('./api.js');
const markDown = require('./generateMarkdown');
let colors = require('./generateHTML');
const http = require('http');
const fs = require('fs');



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
        markDown(response)

    });
// const questions = [
  
// ];

function writeToFile(fileName, data) {
    fs.writeFile("fileName","data", function(err) {
        if (error){
            return console.log(error);
        }
    })
}

        function init() {
            inquirer
            
            .prompt(questions)
            
            .then(async function takeInformation(answers) {
                


            }
            writeToFile
            end
}

// init();

// function sum (a, b) {
//     a + b
// }

// console.log(sum(1, 2))
