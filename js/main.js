const navSlide = () => {
  const burger = document.querySelector(".menuBurger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    burger.classList.toggle("toggle-burger");
    navLists.classList.toggle("nav-active");
  });
};

navSlide();