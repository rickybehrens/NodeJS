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
    'None': '',
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
    'None': '',
  };

  // Get the license link URL based on the selected license
  const linkUrl = licenseLinkUrls[license] || '';

  return linkUrl;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseInfo = {
    // You can include license information here
    'Apache 2.0': 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n\n' +
      'http://www.apache.org/licenses/LICENSE-2.0\n\n' +
      'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
    'GNU 3.0': 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\n' +
      'This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n\n' +
      'You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.',
    'MIT': 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n' +
      'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n' +
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    'BSD 2-Clause': 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n' +
      '1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n' +
      '2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n' +
      'THIS SOFTWARE IS PROVIDED BY THE FREEBSD PROJECT "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE FREEBSD PROJECT OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n' +
      'The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of the FreeBSD Project.',
    'Boost 1.0': 'Boost Software License - Version 1.0 - August 17th, 2003\n\n' +
      'Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:\n\n' +
      'The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.\n\n' +
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    'None': '',
  };

  // Get the license information based on the selected license
  const information = licenseInfo[license] || '';

  return information;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.username}`;
  const emailLink = `mailto:${data.email}`;

  // Get the license badge URL based on the selected license
  const licenseBadgeUrl = renderLicenseBadge(data.license);
  // Get the license link URL based on the selected license
  const licenseLinkUrl = renderLicenseLink(data.license);
  // Get the license information based on the selected license
  const licenseInformation = renderLicenseSection(data.license);

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
  
## License
This project is licensed under the ${data.license} license.\n\n
Copyright (c) ${new Date().getFullYear()} ${data.name}. All rights reserved.


${licenseInformation}
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
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${emailLink}). You can find more of my work at [${data.username}](${githubLink}).
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
