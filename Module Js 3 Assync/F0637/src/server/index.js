const express = require("express");
const app = express();
const axios = require("axios");
const GET_API = {
  requestUrl: "https://api.github.com/users/rafaelcitario",
  host: "localhost",
  port: 3000,
};

app.get("/", (req, res, next) => {
  axios
    .get(GET_API.requestUrl)
    .then((response) => response)
    .then(({ data }) =>
      res.json({
        login: data.login,
        avatar: data.avatar_url,
        href: data.html_url,
        repos: data.repos_url,
        publicRepos: data.public_repos,
        followers: data.followers,
      })
    )
    .catch((err) => console.log(err));
});

app.listen(GET_API.port, () =>
  console.log(`SERVER IS RUNNING AT ${GET_API.host}:${GET_API.port}`)
);
