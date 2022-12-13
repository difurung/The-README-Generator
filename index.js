// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>

{inquirer
    .prompt


// TODO: Create a function to write README file

([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your repository?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please include usage information:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache', 'GNU', 'Unlicense', 'none'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
])
.then((data) => {writeToFile(data);})
};


function writeToFile(data) {    

    fs.writeFile('./dist/README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created READMEmd!')
)};


// TODO: Create a function to initialize app
function init() {questions()}

// Function call to initialize app

init();
