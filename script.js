const navbarLinks = document.querySelectorAll(".nav-service .nav-link");
const serviceOpenButton = document.querySelector("#service-open-button");
const serviceCloseButton = document.querySelector("#service-close-button");

serviceOpenButton.addEventListener("click", () => {
  // Toggle mobile service visibility
  document.body.classList.toggle("show-mobile-service");
});

// Close service when the close button is clicked
serviceCloseButton.addEventListener("click", () => serviceOpenButton.click());

// Close service when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => serviceOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});