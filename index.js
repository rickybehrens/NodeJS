// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generate')

// TODO: Create a function to initialize app
function init() {
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
                choices: ['Apache 2.0', 'GNU 3.0', 'MIT', 'BSD 2-Clause', 'Boost 1.0', 'Creative Commons 1.0', 'None']
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
            {
                type: 'confirm',
                name: 'screenshots',
                message: 'Would you like to include screenshots in the README file?',
                default: false,
            },
        ])

        // TODO: Create a function to write README file
        .then((data) => {
            // Generate README content using the provided data
            let readmeContent = markdown(data);

            // Check if the user wants to include screenshots
            if (data.screenshots) {
                // Add a section for screenshots in the Table of Contents
                readmeContent += `
- [Screenshots](#screenshots)
`;

                // Add the screenshot section
                readmeContent += `
## Screenshots
<!-- Add screenshots here -->
<img src="path_to_screenshot_image_1" alt="Screenshot 1">
<img src="path_to_screenshot_image_2" alt="Screenshot 2">
`;
            }

            fs.writeFile('README.md', readmeContent, (err) => { // Call the generateMarkdown function
                if (err) {
                    console.error(err);
                } else {
                    console.log('Generating README file...');
                }
            });
        });
}

// Function call to initialize app
init();
