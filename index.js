const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{ type:'input',
                     name:'title',
                     message:'Enter projectTitle'
                   }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err) =>
     err ? console.error(err) : console.log('Success!'))
}


// function to initialize program
function init() {
inquirer.prompt(questions).then((answers)=> writeToFile('README.md',answers))
}

//.then((answers) => writeFileAsync('index.html', generateHTML(answers)))
// function call to initialize program
init();
