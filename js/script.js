import { cyclicTextDisplay } from "/js/hero.js";
import { initializeNavigation } from "/js/navigation.js";
import { enableAutoScrollOnHover } from "/js/about.js";
import { referenceSlider } from "/js/slidersSwiper.js";
import { handleScroll } from "/js/animation.js";
import { projectsSlider } from "/js/slidersSwiper.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  cyclicTextDisplay("myStatus");
  enableAutoScrollOnHover(".about__box", ".about__box img");
  referenceSlider();
  projectsSlider();
  document.addEventListener("scroll", handleScroll);
});
