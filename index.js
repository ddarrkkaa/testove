const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function handleDropdownClick(dropdown) {
  const activeDropdowns =
    dropdown.parentElement.querySelectorAll(".dropdown.active");
  activeDropdowns.forEach((activeDropdown) => {
    if (activeDropdown !== dropdown) {
      activeDropdown.classList.remove("active");
    }
  });
  dropdown.classList.toggle("active");
}

document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", () => handleDropdownClick(dropdown));
});
