function insertElementOnDoc(elementOnDoc, element, ...details) {
  const coreElement = document.querySelector(elementOnDoc);
  const newElement = document.createElement(element);
  newElement.innerHTML = details;
  return coreElement.appendChild(newElement);
}
function insertElementAtFirstPosition(elementOnDoc, element, ...details) {
  const coreElement = document.querySelector(elementOnDoc);
  const newElement = document.createElement(element);
  newElement.innerHTML = details;
  return coreElement.prepend(newElement);
}
function insertNext(elementOnDoc, element, ...details) {
  const coreElement = document.querySelector(elementOnDoc);
  const newElement = document.createElement(element);
  newElement.innerHTML = details;

  return document.body.insertBefore(newElement, coreElement.nextSibling);
}

insertElementOnDoc("div", "h1", "H1 INSERIDO NA PÁGINA");
insertElementAtFirstPosition("div", "h2", "H@H@H@H@");
insertNext("body", "h3", "H3 inserido depois da div");
