document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-slider .slide-img");
  let currentIndex = 0;
  0 !== images.length
    ? (images[currentIndex].classList.add("active"),
      setInterval(() => {
        images[currentIndex].classList.remove("active"),
          (currentIndex = (currentIndex + 1) % images.length),
          images[currentIndex].classList.add("active");
      }, 2e3))
    : console.error("No images found in '.image-slider'");
});
