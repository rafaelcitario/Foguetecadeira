const axios = require("axios");
const GET_API = {
  url: "https://api.github.com/users/rafaelcitario",
};
axios.get(GET_API.url)
.then(response => console.log(response))
