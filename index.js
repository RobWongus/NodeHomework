const inquirer = require("inquirer");
const api = require('./api.js');
const markDown = require('./generateMarkdown');
const http = require('http');
const fs = require('fs');



const questions = 
    [
        {
            type: "input",
            message: "Enter Github username.",
            name: "username"
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

        
    ]

    // .then(function(response) {
    //     console.log(response["Github username"]);
    //     api.getUser(response["Github username"]);
    //     markDown(response)

    // });
// const questions = [
  
// ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (error){
            return console.log(error);

        else 
        }
    })
}

        function init() {
            inquirer
            
            .prompt(questions)
            
            .then(function takeInformation(answers) {
                //console.log("HERE!", answers.username);
                const userInformation = api.getUser(answers.username)
                .then(response => {
                    writeToFile("README.md", response.data)
                    console.log(response.data)
                    return response
                    
                });
            })
 };

    
            
 init();

// function sum (a, b) {
//     a + b
// }

// console.log(sum(1, 2))
