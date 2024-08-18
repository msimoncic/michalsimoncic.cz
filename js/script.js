import { cyclicTextDisplay } from "/js/hero.js";
import { initializeNavigation } from "./navigation.js";
import { enableAutoScrollOnHover } from "./about.js";
import { referenceSlider } from "./slidersFlickity.js";
import { handleScroll } from "./animation.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  cyclicTextDisplay("myStatus");
  enableAutoScrollOnHover(".about__box", ".about__box img");
  referenceSlider();
  document.addEventListener("scroll", handleScroll);
});
