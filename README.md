function generateMarkdown(response) {
    return `
  
#${response.title}
  
# ReadMe Generator

## Table of Contents

* Description
* Installation
* Tests
* Usage
* Contributors
* Questions
* License

## Description

${response.description}

##Installation

${response.install}

##Tests

${response.testing}

##Useage

${response.useage}

##Contributors

${response.contributors}

##Questions

${response.questions}

##License
![Github license](https://img.shields.io/github/license/RobWongus/NodeHomework)

![User's Avatar](${response.avatarURL})

##E-Mail

"Rob_Wo@yahoo.com"

  `;
  }