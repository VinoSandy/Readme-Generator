const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{ type:'input',
                     name:'title',
                     message:'Enter projectTitle:'
                   },
                   { type:'input',
                     name:'description',
                     message:'Add project Description:'
                   },
                   {
                    type:'input',
                    name:'installation',
                    message:'Add Installation Details:'
                   },
                   {
                    type:'input',
                    name:'usage',
                    message:'Add usage Details:'
                   },
                   {
                    type:'input',
                    name:'license',
                    message:'Add License Details:'
                   },
                   {
                    type:'input',
                    name:'contributors',
                    message:'Add contributors:'
                   },
                   {
                    type:'input',
                    name:'test',
                    message:'Add Test Details:'
                   },
                   {
                    type:'input',
                    name:'gitHubUserName',
                    message:'Enter gitHub UserName:'
                   },
                   {
                    type:'input',
                    name:'email',
                    message:'Add Email Address:'
                   },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
     err ? console.error(err) : console.log('File created successfully!'));
}


// function to initialize program
function init() {
inquirer.prompt(questions).then((answers)=> writeToFile('README.md',answers))
}

// function call to initialize program
init();
