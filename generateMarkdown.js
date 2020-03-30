function generateMarkdown(data) {
    return `
  # ${data.title}
  

# Table of Contents

* [Description]{##Description}
* [Installation]{##Installation}
* [Tests]{##Tests}
* [Usage]{##Usage}
* [Contributors]{##Contributors}
* [Questions]{##Questions}
* [License]{##License}

## Description
${data.description}

##Installation
${data.install}

##Tests
${data.testing}

##Useage
${data.useage}

##Contributors
${data.contributors}

##Questions
${data.questions}

##License
![Github license](https://img.shields.io/github/license/RobWongus/NodeHomework)

![User's Avatar](${data.avatarURL})
${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  