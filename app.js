function navSlide() {
  var bigMac = document.querySelector(".burger");
  var noBurger = documen.querySelector(".menu-items");
  bigMac.addEventListener('click', function() {
    noBurger.classList.toggle("nav-active");
  });
};
navSlide();

