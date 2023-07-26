// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '(https://img.shields.io/badge/License-MIT-orange)';
    case 'Apache':
      return '(https://img.shields.io/badge/License-Apache-orange)';
    case 'GPL':
      return '(https://img.shields.io/badge/License-GPL-orange)';
    case 'BSD':
      return '(https://img.shields.io/badge/License-BSD-orange)';
    case 'Mozilla':
      return '(https://img.shields.io/badge/License-Mozilla-orange)';
    case 'none':
      return '';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }
switch (license) {
  case 'MIT':
    return '(https://opensource.org/license/mit/)';
  case 'Apache':
    return '(https://opensource.org/license/apache-2-0/)';
  case 'GPL':
    return '(https://opensource.org/license/gpl-2-0/)';
  case 'BSD':
    return '(https://opensource.org/license/bsd-2-clause/)';
  case 'Mozilla':
    return '(https://opensource.org/license/mpl-2-0/)';
  case 'none':
    return '';
  default:
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
