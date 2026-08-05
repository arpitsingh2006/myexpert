import AOS from "aos";

export const customJs = () => {

  AOS.init({
    duration: 1000,
    once: true,
  });

  window.addEventListener("scroll", () => {

    const header = document.querySelector(".main-header");

    if (header) {

      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }

    }

  });




};

