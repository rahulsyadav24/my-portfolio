// Typing effect for home section
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Web Developer", "Designer", "Tech Enthusiast", "Creative Thinker"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 1000);
});

// Dynamic project injection
const projects = [
  {
    title: "KaamDekho App",
    description: "A job-matching platform for daily wage workers and employers.",
    link: "https://github.com/kaam-dekho/Kaamdekhoworker-app"
  },
  {
    title: "To-Do List",
    description: "Simple and elegant task manager built with JS.",
    link: "https://github.com/yourusername/todo-list"
  },
  {
    title: "Portfolio Website",
    description: "This portfolio site built using HTML, CSS, and JS.",
    link: "https://github.com/yourusername/portfolio"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach((proj) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">View on GitHub</a>
  `;
  projectList.appendChild(projectDiv);
});
