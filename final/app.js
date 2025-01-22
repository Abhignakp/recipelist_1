// Function to get an element and throw an error if not found
const fetchElement = (selector) => {
  const el = document.querySelector(selector);
  if (!el) {
    throw new Error(`No element found for the selector: ${selector}`);
  }
  return el;
};

// DOM elements
const navLinks = fetchElement('.nav-links');
const navButton = fetchElement('.nav-btn');

// Toggle visibility of links on button click
navButton.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

// Get the current year and update the date element
const dateElement = fetchElement('#date');
dateElement.textContent = new Date().getFullYear();

