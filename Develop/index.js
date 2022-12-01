// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application

// Imported files to the index.js file
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const Questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Description:",
  },
  {
    type: "input",
    name: "Installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "Usage",
    message: "Usage Information:",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Contribution Guidelines:",
  },
  {
    type: "list",
    name: "License",
    message: "Choose a License:",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "NEW" or "REVISED" License',
    ],
    filter(val) {
      return val;
    },
  },
  {
    type: "input",
    name: "Test",
    message: "Test Instructions:",
  },
  {
    type: "input",
    name: "Github",
    message: "Questions (Github):",
  },
  {
    type: "input",
    name: "Email",
    message: "E-mail:",
  },
];

// TODO: Create a function to write README file
function writeToFile(readme, data) {
  return inquirer.prompt(Questions).then((answers) => {
    console.log(answers);
    const readMeContent = genMarkDown(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
}
// writeToFile();

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
