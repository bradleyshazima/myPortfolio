export default class Typewriter {
  constructor(element, words) {
    this.element = element;
    this.words = words;
    this.wordIndex = 0;
    this.letterIndex = 0;
    this.direction = 1;
  }

  start() {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];
    if (this.direction === 1) {
      this.element.textContent = currentWord.slice(0, this.letterIndex);
      this.letterIndex++;
      if (this.letterIndex > currentWord.length) {
        this.direction = -1;
        setTimeout(() => this.typeEffect(), 2000); // Delay before deleting
      } else {
        setTimeout(() => this.typeEffect(), 100); // Delay between typing each letter
      }
    } else {
      if (this.letterIndex === 0) {
        this.element.textContent = currentWord.slice(0, this.letterIndex);
        this.direction = 1;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(() => this.typeEffect(), currentWord === '' ? 0 : 500); // No delay when hero-text is empty
      } else {
        this.element.textContent = currentWord.slice(0, this.letterIndex);
        this.letterIndex--;
        setTimeout(() => this.typeEffect(), 100); // Delay between deleting each letter
      }
    }
  }
}
