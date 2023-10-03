const words = ['Full Stack Web Developer', 'Certified Graphic Designer', 'Self Taught UI/UX Designer'];
let wordIndex = 0;
let letterIndex = 0;
let direction = 1;
const textElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');

function typeEffect() {
  const currentWord = words[wordIndex];
  if (direction === 1) {
    textElement.textContent = currentWord.slice(0, letterIndex);
    letterIndex++;
    if (letterIndex > currentWord.length) {
      direction = -1;
      setTimeout(typeEffect, 2000); // Delay before deleting
    } else {
      setTimeout(typeEffect, 100); // Delay between typing each letter
    }
  } else {
    if (letterIndex === 0) {
      textElement.textContent = currentWord.slice(0, letterIndex);
      direction = 1;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, currentWord === '' ? 0 : 500); // No delay when hero-text is empty
    } else {
      textElement.textContent = currentWord.slice(0, letterIndex);
      letterIndex--;
      setTimeout(typeEffect, 100); // Delay between deleting each letter
    }
  }
}

typeEffect();
