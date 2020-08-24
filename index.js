const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
{type: "input",
name: "title",
message:"What is the title of your project?"},
{type: "input",
name: "description",
message:"Please enter a description of your project."},
{type: "input",
name: "installation",
message:"Please describe the steps required to install your project."},
{type: "input",
name: "usage",
message:"Please provide instruction and examples for use of your project."},
{type: "input",
name: "credits",
message: "Starting with yourself, please enter the full name and github username for each member on your team separated by \"|\" (i.e. 'Firstname Lastname username | Firstname Lastname username') ",
filter: answer => {return answer.split("|");}
},
{type: "list",
name: "license",
message:"Which license are you using for your project?",
choices: ["MIT", "GNU GPLv3"]},
{type: "input",
name: "contributing",
message:"Please enter guidlines for how other developers can contribute."},
{type: "input",
name: "tests",
message:"Please provide examples of how to run your project tests."},
{type: "input",
name:"email",
message: "Please enter your email address."}
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./" + fileName, data, 'utf8', (err) => {
    if (err) throw new Error(err);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    writeToFile("answers.txt", JSON.stringify(answers));
  })
  
}

// function call to initialize program
init();
