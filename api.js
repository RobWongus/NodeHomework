const axios = require("axios");


const api = {
    getUser(username) {
        const gitApi= `https://api.github.com/users/${username}`

        axios
        .get(gitApi)
        .then(response => console.log(response.data));
    }
  };
  
  module.exports = api;
  