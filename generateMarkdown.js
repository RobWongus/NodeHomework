


function generateMarkdown(data) {
    return `
  # ${data.title}
  

# Description

${data.description}

# Table of Contents

* [Description]{##Description}
* [Installation]{##Installation}
* [Useage]{##Useage}
* [License]{##License}
* [Contributors]{##Contributors}
* [Tests]{##Tests}
* [Questions]{##Questions}

##Installation
${data.install}

##Useage
${data.useage}

##License
![Github license](https://img.shields.io/github/license/RobWongus/NodeHomework)

##Contributors
${data.contributors}

##Tests
${data.testing}

##Questions
${data.questions}

![User's Avatar](${data.avatarURL})
${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  