// TODO title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const inquirer = require('inquirer')
const fs = require('fs')

// Questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for the project:',
            choices: ['MIT', 'GPL', 'Apache', 'BSD'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        },
    ])
    .then((answers) => {
        const readme = `
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

        ## License
        `
    })