const handleModal = () => {
  const invisibleDiv = document.querySelector(".invisible");
  const buttonModal = document.querySelector("button");

  window.addEventListener("keydown", (e) => {
    if (!invisibleDiv.classList.contains("invisible")) {
      if (e.code == "Escape") {
        invisibleDiv.classList.add("invisible");
      }
    }
  });

  if (invisibleDiv.classList.contains("invisible")) {
    buttonModal.addEventListener("click", () => {
      invisibleDiv.classList.remove("invisible");
    });
  }
};

handleModal();
