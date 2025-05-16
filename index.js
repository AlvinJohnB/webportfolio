// typing animation
const text = "👋 Hi, I'm Alvin — a Full Stack Web Developer.";
const header = document.getElementById("typing-text");
let typingTimeouts = [];

function typeWriter(i = 0) {
  header.textContent = "";
  typingTimeouts.forEach(clearTimeout);
  typingTimeouts = [];
  function typeChar(j) {
    if (j <= text.length) {
      header.textContent = text.slice(0, j);
      typingTimeouts.push(setTimeout(() => typeChar(j + 1), 50));
    }
  }
  typeChar(0);
}

document.addEventListener("DOMContentLoaded", function () {
  const profile = document.getElementById("profile");
  if (!profile) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          profile.classList.remove("profile-animate"); // Resets animation

          void profile.offsetWidth;
          profile.classList.add("profile-animate");

          typeWriter();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(profile);
});

// Map nav links to their section IDs
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  let index = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    if (rect.top <= 80) {
      index = i;
    }
  }
  navLinks.forEach((link) => link.classList.remove("active"));
  if (navLinks[index]) navLinks[index].classList.add("active");
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("resize", setActiveLink);
document.addEventListener("DOMContentLoaded", setActiveLink);
