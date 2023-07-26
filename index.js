// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title:",
    name: "projectTitle"
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "installInstructions"
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
    message: "Enter testing instructions:",
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
function writeToFile(fileName, data) {
    // Generate the markdown content for README
    const markdownContent = generateMarkdown(data);
  
    // Write the markdown content to the specified file
    fs.writeFile(fileName, markdownContent, (error) => {
      if (error) {
        console.error('Error creating README file:', error);
      }
    });
  }


// TODO: Create a function to initialize app
function init() {
    console.log('Please answer the following questions to create your README');
  
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile('README.md', answers); // Call writeToFile function with user answers
      })
      .catch((error) => {
        console.error('Error occurred while gathering README data:', error);
      });
  }
  

// Function call to initialize app
init();
module.exports = writeToFile;