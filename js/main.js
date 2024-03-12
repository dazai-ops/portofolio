const navSlide = () => {
  const burger = document.querySelector(".menuBurger");
  const navLists = document.querySelector("nav");
  const skillsLink = document.querySelector('.menuEmpat a');
  const projectsLink = document.querySelector('.menuLima a');

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    burger.classList.toggle("toggle-burger");
    navLists.classList.toggle("nav-active");
  });

  skillsLink.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLists.classList.remove('nav-active');
      burger.classList.remove('toggle-burger');
    }
  });

  projectsLink.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLists.classList.remove('nav-active');
      burger.classList.remove('toggle-burger');
    }
  });

  // Menambahkan event listener untuk menghilangkan nav dan burgerIcon jika diklik di luar area nav
  document.addEventListener('click', function(event) {
    if (!navLists.contains(event.target) && !burger.contains(event.target)) {
      navLists.classList.remove('nav-active');
      burger.classList.remove('toggle-burger');
    }
  });
};

navSlide();
