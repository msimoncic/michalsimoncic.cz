export function initializeNavigation() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  let manualOverride = false; // Stav pro řízení, zda byl proveden manuální klik

  // Funkce pro přidání a odebrání třídy "active"
  function setActiveLink(link) {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  }

  // Funkce pro zjištění aktuální sekce podle scrollování
  function updateActiveLinkOnScroll() {
    if (manualOverride) return; // Pokud byl kliknut odkaz, scrollování nemění active stav

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionMiddle = sectionTop + sectionHeight / 2;
      const scrollPosition = pageYOffset + window.innerHeight / 2;

      if (scrollPosition >= sectionMiddle) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + current) {
        setActiveLink(link);
      }
    });
  }

  // Při kliknutí na odkaz
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActiveLink(link);
      manualOverride = true; // Nastaví manuální režim
      setTimeout(() => {
        manualOverride = false; // Po určité době povolí znovu automatické scrollování
      }, 1500);
    });
  });

  // Při scrollování
  window.addEventListener("scroll", updateActiveLinkOnScroll);

  // Nastavení správného odkazu při načtení stránky
  updateActiveLinkOnScroll();
}
