// Select elements
const box = document.getElementById("box");
const button = document.getElementById("animateBtn");

// When button is clicked, toggle the "animate" class
button.addEventListener("click", () => {
  box.classList.toggle("animate");
});
