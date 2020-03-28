const axios = require("axios");


const api = {
    getUser(username) {
        const gitApi= `https://api.github.com/users/${username}`

        return axios
        .get(gitApi)
        .then(response => {
            console.log(response.data)
        return response 
        });
        
    }
  };
  
  module.exports = api;
  