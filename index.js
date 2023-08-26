// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
// What is your GitHub username?
// What is your email address?
// What is your project's name?
// Please write a short description of your project:
// What kind of license should your project have? (this is a list and has to use a specific badge)
// What command should be run to install dependencies? ("npm i" is default)
// What does the user need to know about using the repo?
// What does the user need to know about contributing to the repo?
// Generating README...
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: '',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: '',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'list',
            name: '',
            message: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: '',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: '',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: '',
            message: 'What does the user need to know about contributing to the repo?',
            },
    ])
    .then((data) => {
        fs.writeFile('README.md', JSON)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
