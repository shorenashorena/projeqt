const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
];
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % images.length;
  const img = document.getElementById("sliderImage");
  if (img) {
    img.style.transition = "opacity 0.6s ease";
    img.style.opacity = "0.3";
    setTimeout(() => {
      img.src = images[idx];
      img.style.opacity = "1";
    }, 600);
  }
}, 5000);
