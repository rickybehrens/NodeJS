// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Define the license badge URLs
  const licenseBadgeUrls = {
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'BSD 2-Clause': 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'Creative Commons 1.0': 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    'None': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };

  // Get the license badge URL based on the selected license
  const badgeUrl = licenseBadgeUrls[license] || '';

  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkUrls = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'Boost 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'Creative Commons 1.0': 'http://creativecommons.org/publicdomain/zero/1.0/',
    'None': 'http://unlicense.org/',
  };

  // Get the license link URL based on the selected license
  const linkUrl = licenseLinkUrls[license] || '';

  return linkUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // You can include license information here
  return `This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.name}`;
  const emailLink = `mailto:${data.email}`;

  // Get the license badge URL based on the selected license
  const licenseBadgeUrl = renderLicenseBadge(data.license);
  // Get the license link URL based on the selected license
  const licenseLinkUrl = renderLicenseLink(data.license);

  // Replace placeholders in the template with actual user answers
  let readmeContent = `# ${data.title}
[![Github License](${licenseBadgeUrl})](${licenseLinkUrl})

## Project Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;

  // Conditionally include the Screenshots section with images
  if (data.screenshots) {
    readmeContent += `
- [Screenshots](#screenshots)`;
  }

  // Append the user's answer for the "Installation" section
  readmeContent += `
  
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
`;

  // Append the user's answer for the "Usage" section
  readmeContent += `
  
## Usage
${data.usage}
`;

  // Append the user's answer for the "Contributing" section
  readmeContent += `
  
## Contributing
${data.contributing}
`;

  // Append the user's answer for the "Tests" section
  readmeContent += `
  
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
`;

  // Append the user's answer for the "Questions" section
  readmeContent += `
  
## Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${emailLink}). You can find more of my work at [${data.name}](${githubLink}).
`;

// Conditionally include the Screenshots section with images
if (data.screenshots) {
  readmeContent += `
## Screenshots
<!-- Add screenshots here -->
<img src="path_to_screenshot_image_1" alt="Screenshot 1">
<img src="path_to_screenshot_image_2" alt="Screenshot 2">
`;
}

// Return the completed README content
return readmeContent;
}

module.exports = generateMarkdown;
