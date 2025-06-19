const avatar = document.getElementById("avatar");
const title = document.getElementById("title");
const text = document.getElementById("text");

setTimeout(() => {
  avatar.classList.remove("skeleton");
  avatar.classList.remove("avatar");
  avatar.innerHTML = '<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" style="width: 80px; height: 80px; border-radius: 50%;" />';

  title.classList.remove("skeleton");
  title.textContent = "Sarah Johnson";

  text.classList.remove("skeleton");
  text.textContent = "Frontend Developer at TechCorp.";
}, 2500);
