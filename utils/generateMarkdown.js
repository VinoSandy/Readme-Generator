// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
            ## Description: 
              ${data.description}
            ## Table of contents
                [Title](#title)

                [Description](#description)

                [Installation](#installation)

                [usage](#usage)

                [License](#License)

                [Contributors](#contributors)

                [Test](#test)

                [Questions](#question)
             ## Installation:
                ${data.installation}   
             ## Usage:
                ${data.usage}
             ## License:
                ${data.license}  
            ## Contributors:
                ${data.contributors}
            ## Tests:
               ${data.tests}
            ## Questions:
               Any Questions about this project contact me in (GitHun Link)[https://github.com/${data.gitHubUserName}]
               or Email me at ${data.email}         
  
  `;
  }
  
  module.exports = generateMarkdown;
  