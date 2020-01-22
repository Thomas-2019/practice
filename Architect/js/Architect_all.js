(function() {
  "use strict";

  const container = document.getElementsByClassName("container")[0];
  const checkbox = document.getElementsByName("checkbox")[0];

  container.addEventListener("click", function(event) {
    if (checkbox.checked && event.target.matches(".nav-wrapper")) {
      checkbox.checked = false;
    }
  });
})();

(function() {
  "use strict";
  // fade out
  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  window.addEventListener("load", function() {
    const loaderWrapper = document.querySelector(".loader");
    fadeOut(loaderWrapper);
  });
})();

(function() {
  "use strict";
  let swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();
