const bgchange = document.querySelector(".bg-img");
const navchange = document.querySelector(".nav-bar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains("toolh1")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideLeft");
      } else {
        entry.target.classList.remove("slideLeft");
      }
    }

    if (entry.target.classList.contains("aboutp")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideRight");
      } else {
        entry.target.classList.remove("slideRight");
      }
    }

    if (entry.target.classList.contains("toolImg")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
      } else {
        entry.target.classList.remove("fadeIn");
      }
    }

    if (entry.target.classList.contains("projecth1")) {
      if (entry.isIntersecting) {
        bgchange.classList.add("change-color");

        navchange.classList.add("change-color");
      } else {
        bgchange.classList.remove("change-color");

        navchange.classList.remove("change-color");
      }
    }

    if (entry.target.classList.contains("contact-container")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideUp");
      } else {
        entry.target.classList.remove("slideUp");
      }
    }
  });
});

const todo = document.querySelectorAll(
  ".aboutp, .toolh1, .toolImg, .projecth1, .contact-container",
);
todo.forEach((el) => observer.observe(el));
