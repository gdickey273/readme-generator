// function to generate markdown for README
function generateMarkdown(data) {
  // const credits = [];
  let creditsTemplate = "";

// Graham Dickey gdickey273 | Martin Hemphilll mhemplll | Dianna Mack dmacksdfasdf

  for(let credit of data.credits){
    creditsTemplate += `* ${credit}\n `
  };
  const creditArray = data.credits[0].split(" ").filter(el => el.trim().length > 0);
  const githubAccount = creditArray.pop();

  
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits 
  ${creditsTemplate}

  ## License 
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me with any questions you have regarding my project.   
  Email: ${data.email}  
  Github: https://github.com/${githubAccount}  
`;
}

module.exports = generateMarkdown;
