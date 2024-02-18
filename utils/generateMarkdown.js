// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
   ## Description: 
              ${data.description}

   ## Table of contents
- [Description](#description)

   - [Installation](#installation)

   - [Usage](#usage)

   - [License](#license)

   - [Contributors](#contributors)

   - [Tests](#tests)

   - [Questions](#questions)

   ## Installation:
                ${data.installation}   
   ## Usage:
                ${data.usage}
   ## License:
                ${data.license}  
   ## Contributors:
                ${data.contributors}
   ## Tests:
               ${data.test}
   ## Questions:
        Any Questions about this project contact me at
        [GitHub](https://github.com/${data.gitHubUserName})
         Email : ${data.email}         
  
  `;
  }
  
  module.exports = generateMarkdown;
  