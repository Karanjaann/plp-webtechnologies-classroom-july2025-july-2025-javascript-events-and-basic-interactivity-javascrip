// ----------------------
// Part 1: Event Handling
// ----------------------

// Counter functionality
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// ---------------------------
// Part 2: Interactive Elements
// ---------------------------

// Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// --------------------------
// Part 3: Form Validation
// --------------------------

const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from refreshing page

  let valid = true;

  // Name validation: at least 3 characters
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation: regex pattern
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation: minimum 6 characters
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Show success message if form is valid
  if (valid) {
    document.getElementById("formSuccess").textContent = "Registration successful!";
    form.reset(); // clear form
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});

