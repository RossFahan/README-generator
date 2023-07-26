// Import required packages
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown');

// Array of questions for user input
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

// Function to write README file
function writeToFile(fileName, data) {
    // Generate the markdown content for README
    const markdownContent = generateMarkdown(data);
  
    // Write the markdown content to the specified file
    fs.writeFile(fileName, markdownContent, (error) => {
      if (error) {
        console.error('Error creating README file: ', error);
      }
    });
  }

// Function to initialize the application
function init() {
    console.log('\nPlease answer the following questions to create your README: \n');
  
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile('README.md', answers); // Call writeToFile function with user answers
      })
      .catch((error) => {
        console.error('\nError occurred while gathering README data: ', error);
      });
  }
  
// Start the application
init();
module.exports = writeToFile;