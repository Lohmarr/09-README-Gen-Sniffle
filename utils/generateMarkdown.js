// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  };

  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/license/BSD-3-clause/'
  };

  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${license} license.

[![License](${badge})](${link})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers.license)
  return `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}
${licenseSection}


## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any questions, you can contact me using these methods:

Github: [@${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`
}

module.exports = generateMarkdown;
