// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

            ## Description: 
              ${data.description}

            ## Table of contents
               - [Title](#Title)

               - [Description](#Description)

               - [Installation](#Installation)

               - [Usage](#Usage)

               - [License](#License)

               - [Contributors](#Contributors)

               - [Test](#Test)

               - [Questions](#Question)

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
               Any Questions about this project contact me in [GitHub Link](https://github.com/${data.gitHubUserName})
               or Email me at ${data.email}         
  
  `;
  }
  
  module.exports = generateMarkdown;
  