
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a quick description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "How does the user install dependencies?",
        name: "install",
    },
    {
        type: "input",
        message: "How does the user run the project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who helped make this project?",
        name: "credits",
    },
    {
        type: "input",
        message: "How can someone contribute to this repository?",
        name: "contribute",
    },
    {
        type: "list",
        message: "What license does your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicensed",
            "Apache 2.0",
            "BSD 3-Clause",
        ]
    },
    {
        type: "input",
        message: "What command does the user use to run a test?",
        name: "test",
    },
    {
        type: "input",
        message: "What's your github username'?",
        name: "github",
    },
    {
        type: "input",
        message: "What's your email'?",
        name: "email",
    },

];

inquirer
    .prompt(questions)
    .then(function(userInput) {
        let markdownContent = generateMarkdown(userInput);
        fs.writeFile("README.md", markdownContent, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README Successfully Generated!')
            }
        })
    })