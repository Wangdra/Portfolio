/*=============== toggle icon navbar ===================*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*=============== scroll section active link ===================*/

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*=============== sticky navbar ===================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

/*=============== scroll reveal ===================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: false,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-contact h1, .about-image, .about-content", {
  origin: "left",
});

/*=============== typed js ===================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Cyber Security(PenTester)",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

const typed2 = new Typed(".multiple-text-2", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Cyber Security(PenTester)",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*=============== toggle readme btn ===================*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".read-more-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const moreContent = document.querySelector(".more-strengths");

      if (
        moreContent.style.display === "none" ||
        moreContent.style.display === ""
      ) {
        moreContent.style.display = "block";
        this.textContent = "Read less";
      } else {
        moreContent.style.display = "none";
        this.textContent = "Read more";
      }
    });
});
