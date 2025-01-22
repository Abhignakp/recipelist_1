
const getElementBySelector = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`No element found for selector: ${selector}`);
  }
  return element;
};


const links = getElementBySelector('.nav-links');
const navBtn = getElementBySelector('.nav-btn');
const date = getElementBySelector('#date');


navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});


date.textContent = new Date().getFullYear();
