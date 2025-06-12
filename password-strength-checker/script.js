const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  const strength = getPasswordStrength(pwd);

  strengthBar.className = "strength-bar";
  strengthText.textContent = "Strength: —";

  if (strength === "weak") {
    strengthBar.classList.add("weak");
    strengthText.textContent = "Strength: Weak";
  } else if (strength === "medium") {
    strengthBar.classList.add("medium");
    strengthText.textContent = "Strength: Medium";
  } else if (strength === "strong") {
    strengthBar.classList.add("strong");
    strengthText.textContent = "Strength: Strong";
  }
});

function getPasswordStrength(password) {
  let strengthScore = 0;

  if (password.length >= 6) strengthScore++;
  if (/[A-Z]/.test(password)) strengthScore++;
  if (/[0-9]/.test(password)) strengthScore++;
  if (/[\W_]/.test(password)) strengthScore++;

  if (strengthScore <= 1) return "weak";
  if (strengthScore === 2 || strengthScore === 3) return "medium";
  return "strong";
}
