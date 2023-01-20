
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Unlicensed":
      return "";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "BSD 3-Clause License":
          return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case "Unlicensed":
      return "";
      case "Apache 2.0 License":
        return "https://opensource.org/licenses/Apache-2.0";
        case "BSD 3-Clause License":
          return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return "The application is covered under the following license:";
    case "Unlicensed":
      return "This application is not covered under any license";
      case "Apache 2.0 License":
        return "The application is covered under the following license:";
        case "BSD 3-Clause License":
          return "The application is covered under the following license:";
  }
}

const generateMarkdown = (data) => {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  To install dependencies, run the following:
  \`
  ${data.install}
  \`
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  This repository is licensed under the ${data.license} license.

  ${renderLicenseSection(data.license)}  
  ${renderLicenseLink(data.license)}

  ## Contributing
  Contribute to this project ${data.contribute}

  ## Testing
  To run test type ${data.test} in the console

  ## Questions
  If you have any questions you can contact me at ${data.email} or via my GitHub: ${data.github}
  
`;
}

module.exports = generateMarkdown;
