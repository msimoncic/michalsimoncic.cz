export function cyclicTextDisplay(elementId) {
  const texts = [
    "Frontend vývojář",
    "Shoptet partner",
    "Fotbalista",
    "Student",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const element = document.getElementById(elementId);

    if (!element) return; // Pokud prvek neexistuje, ukonči funkci

    if (isDeleting) {
      currentText = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = texts[textIndex].substring(0, charIndex + 1);
      charIndex++;
    }

    element.innerHTML = currentText;

    if (!isDeleting && charIndex === texts[textIndex].length) {
      setTimeout(() => (isDeleting = true), 2000); // Pauza před mazáním
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  type();
}
