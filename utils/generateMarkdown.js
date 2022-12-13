// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU':
      return '[![License: GNU v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license){
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[Apache](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU':
      return '[GNU: GPL v3](https://opensource.org/licenses/GPL-3.0)';
    case 'Unlicense':
      return '[Unlicense](https://opensource.org/licenses/unlicense)';
    default:
      return '';
  };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''}
    else {
      return "## License"        
      
    };
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  
  
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  
  
  ## Table of Contents 
  
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)


## Description
  ${data.description}



## Installation
  ${data.installation}




## Usage
  ${data.usage}



## Credits




## Features



## Questions
  If you have any further questions please contact me at ${data.email} and https://github.com/${data.github}



## Tests
  ${data.test}


`;
}

module.exports = generateMarkdown;
