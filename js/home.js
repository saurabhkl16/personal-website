document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  let currentPath = window.location.pathname.split("/").pop();

  if (window.location.pathname.split("/") === "") {
    window.location.href = "home.html";
  }

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentPath)) {
      link.classList.add("active");
      link.classList.remove("text-white");
      link.classList.add("text-warning");
    } else {
      link.classList.remove("active");
      link.classList.remove("text-warning");
      link.classList.add("text-white");
    }
  });
});

const titles = [
  "Frontend Developer",
  "JavaScript Developer",
  "Angular Developer",
];

let currentTitleIndex = 0;
let currentText = "";
let isDeleting = false;
let letterIndex = 0;

function typeEffect() {
  const currentTitle = titles[currentTitleIndex];

  if (!isDeleting) {
    currentText = currentTitle.substring(0, letterIndex + 1);
    letterIndex++;
  } else {
    currentText = currentTitle.substring(0, letterIndex - 1);
    letterIndex--;
  }

  document.getElementById("text").textContent = currentText;

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentText === currentTitle) {
    typingSpeed = 1000; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    typingSpeed = 500; // Pause before typing next word
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
