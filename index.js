// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const markdown = require('./utils/generate')

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
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['Apache 2.0', 'GNU 3.0', 'MIT', 'BSD 2-Clause', 'Boost 1.0', 'Creative 1.0', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])

    .then((data) => {
        fs.writeFile('README.md', markdown(data), (err) => { // Call the generateMarkdown function
          if (err) {
            console.error(err);
          } else {
            console.log('Generating README file...');
          }
        });
      });

// TODO: Create a function to write README file

// function writeToFile(fileName, data) { 

// }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
