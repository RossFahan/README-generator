// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title:",
    name: "projTitle"
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "installInst"
  },
  {
    type: "input",
    message: "Enter usage information:",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contributions"
  },
  {
    type: "input",
    message: "Enter test instructions:",
    name: "testing"
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "BSD", "Mozilla", "None"]
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "userName"
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 

    }

// Function call to initialize app
init();
