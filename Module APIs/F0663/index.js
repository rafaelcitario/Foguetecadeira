const url = "https://api.github.com/users/rafaelcitario";

async function getUserData() {
  const userData = await fetch(url)
    .then((result) => result.json())
    .then((body) => body);
  console.log(userData);

  insertElementOnDoc(
    "body",
    "header",
    `<nav>
    <ul>
      <li><a href='${"/"}'>Home</li>
      <li><a href='${userData.html_url}'>github</li>
      <li><a href='${"https://linkedin.com/in/rafaelcitario"}'>linkedin</li>
    </ul>
  </nav>`
  );

  insertElementOnDoc(".app", "div", userData.repos_url);
  insertElementOnDoc(".app", "img", userData.avatar_url);
  insertElementOnDoc(".app", "h1", userData.name);
}

const load = setTimeout(() => {
  getUserData();
}, 200);

function insertElementOnDoc(elementOnDoc, elementToInsert, ...content) {
  const currentElement = document.querySelector(elementOnDoc);
  const insertElement = document.createElement(elementToInsert);

  if (elementToInsert != "img") {
    insertElement.innerHTML = content;
  } else {
    insertElement.src = content;
  }
  return currentElement.prepend(insertElement);
}
