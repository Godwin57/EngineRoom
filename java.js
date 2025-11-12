// Simple script for interactivity (optional future expansion)
document.addEventListener("DOMContentLoaded", () => {
  console.log("VI-REX Fashion & Scents website loaded successfully!");
});

// Simple live search filter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product-card");

  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    products.forEach(product => {
      const name = product.getAttribute("data-name").toLowerCase();
      product.style.display = name.includes(value) ? "block" : "none";
    });
  });
});

const form = document.getElementById('paymentForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
  const cvv = document.getElementById('cvv').value;

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert('Please enter a valid 16-digit card number.');
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert('Please enter a valid 3-digit CVV.');
    return;
  }

  successMsg.style.display = 'block';
  form.reset();
});

window.addEventListener("scroll", function() {
  const topButton = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

window.addEventListener("scroll", function() {
  const topButton = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});
