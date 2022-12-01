// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  const licenseBadges = {
    "Apache License 2.0":
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "Boost Software License 1.0":
      "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
    "MIT License":
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    'BSD 2-Clause "Simplified" License':
      "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
    'BSD 3-Clause "NEW" or "REVISED" License':
      "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
  };
  if (License) {
    return licenseBadges[License];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  const licenseLinks = {
    "Apache License 2.0": `[License](https://opensource.org/licenses/Apache-2.0)`,
    "Boost Software License 1.0": `[License](https://www.boost.org/LICENSE_1_0.txt)`,
    "MIT License": `[License: MIT](https://opensource.org/licenses/MIT)`,
    'BSD 2-Clause "Simplified" License': `[License](https://opensource.org/licenses/BSD-2-Clause)`,
    'BSD 3-Clause "NEW" or "REVISED" License': `[License](https://opensource.org/licenses/BSD-3-Clause)`,
  };
  if (License) {
    return licenseLinks[License];
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License) {
    return `You chose ${License}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}

${renderLicenseBadge(answers.License)}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution Guidelines](#Contributing)
* [Test Instructions](#Test)
* [Questions](#Github)
* [License](#License)

## Description
${answers.Description}

     
## Usage
${answers.Usage}


## Installation
${answers.Installation}

## Contributing
${answers.Contributing}

## Tests
${answers.Test}

## Questions
${answers.Github}

## Email
${answers.Email}

## License
 ${renderLicenseSection(answers.License)};

`;
}
// Exporting functions to index.js 
module.exports = generateMarkdown;
