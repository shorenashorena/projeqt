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
    img.style.opacity = "0.3";
    setTimeout(() => {
      img.src = images[idx];
      img.style.opacity = "1";
    }, 600);
  }
}, 5000);

const aboutSection = document.querySelector("#about");
const fills = document.querySelectorAll(".fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fills.forEach((fill) => {
          const targetWidth = fill.getAttribute("data-width");
          fill.style.width = targetWidth;
        });
      }
    });
  },
  { threshold: 0.5 }
);

if (aboutSection) {
  observer.observe(aboutSection);
}

const slides = document.querySelectorAll(".testi-slide");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIdx = dot.getAttribute("data-index");
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    slides[slideIdx].classList.add("active");
    dot.classList.add("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: "Message", userId: 1 }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (res.ok) {
      alert("Thank you for getting in touch! We appreciate you contacting us.");
      e.target.reset();
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
