// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs)');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to title your project as?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you like to describe your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What instructions do you want to list for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of you project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'what are the guidelines on contribution?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What steps must be made to test you application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the types of licenses needed for this project?:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'Unlicense', 'BSD 2-Clause', 'LGPLv3', 'AGPLv3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please, enter your Github username.'
    },
    { 
        type: 'input',
        name: 'email',
        message: 'Please, enter your github email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

