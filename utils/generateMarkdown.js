// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (!license) return ``;
    return `![license](https://img.shields.io/badge/license-${license}-blue)`;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (!license) return ``;
	return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (!license) return ``;
	return renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const user = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.uclsername}-4cbbb9`;

  return `# ${data.title} 
  
  ## Project Description
    ${data.description}
  
  ## Useful Links
  [Deployed Application] (${data.link})
  \n GitHub at: ${data.url}

  ---
  ## Table of Contents

  1. [Project Description](#project-description)
  2. [Author Info](#author info)
  3. [Installation](#installation)
  4. [User Story](#user-story)
  5. [Acceptance Criteria](#acceptance-criteria)
  6. [Tests](#tests)
  7. [Contributors](#contributors)
  8. [License](#license)

  ---

  ## Author Info
  \n![Badge](${gitHub}) 
  \n![Profile Image](${user})
  \nIf you have any questions, contact the author directly at ${data.email}.
  ---

  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Technology used
  ${data.technology}
  ---
  ## User Story
  \`\`\`
  ${data.story}
  \`\`\`
  ---
  ## Acceptance Criteria
  \`\`\`
  ${data.criteria}
  \`\`\`

  ---

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contributors
  ${data.contributer}

  ## License
  ${data.license}

  `
   
}

module.exports = generateMarkdown;
