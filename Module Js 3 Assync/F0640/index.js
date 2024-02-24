const axios = require("axios");

async function getUser(user) {
  try {
    await axios
      .get("https://api.github.com/users/rafaelcitario")
      .then((response) => {
        if (user === response.data.login) {
          return console.log(response.data.html_url);
        }
      });
  } catch (erro) {
    console.log(erro);
  }
}

getUser("rafaelcitario");
