const inquirer = require("inquirer");
const fs = require("fs");
const genMark = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a description for this project."  
    },

    {
        type:"input",
        name: "installation",
        message: "What are the steps to install this project"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the application for this project?"
    },

    {
        type: "list",
        name: "license",
        Message: "Please choose a license.",
        choices: [
            "MIT",
            "Public Domain"
        ]
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?"
    },

    {
        type: "input",
        name: "tests",
        message: "What are the instructions for testing this project?"
    },

    {
        type: "input",
        name: "gitHub",
        message: "What is your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            throw err;
        }
        console.log('file created')
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data =>{
        const rmTemp = genMark(data);
        writeToFile('newReadME.md',rmTemp)
    })
}

// function call to initialize program
init();

