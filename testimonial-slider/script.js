const testimonials = [
  {
    name: "Sarah Johnson",
    quote: "This product changed my life! I can't imagine working without it.",
    img: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "David Lee",
    quote: "Great experience, excellent support, and amazing UI!",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Priya Desai",
    quote: "Highly recommend it to all developers out there.",
    img: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Carlos Alvarez",
    quote: "A fantastic tool for improving productivity at work.",
    img: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

let index = 0;

const nameEl = document.getElementById("name");
const quoteEl = document.getElementById("quote");
const avatarEl = document.getElementById("avatar");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function showTestimonial(i) {
  const t = testimonials[i];
  nameEl.textContent = t.name;
  quoteEl.textContent = `"${t.quote}"`;
  avatarEl.src = t.img;
}

showTestimonial(index);

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

// Optional auto-slide
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);
