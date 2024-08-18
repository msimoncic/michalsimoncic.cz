export function handleScroll() {
  const pageTop = document.documentElement.scrollTop || document.body.scrollTop;
  const pageBottom = pageTop + window.innerHeight;
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    if (sectionTop < pageBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}
