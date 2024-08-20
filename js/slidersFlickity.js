const referenceSlider = () => {
  const referenceSliderEl = document.querySelector(`.about__reference`);

  if (referenceSliderEl) {
    var referenceSlider = new Flickity(referenceSliderEl, {
      cellAlign: "left",
      contain: true,
      freeScroll: false,
      pageDots: false,
      adaptiveHeight: false,
      lazyLoad: true,
      wrapAround: true,
      groupCells: false,
      imagesLoaded: true,
    });
  }
};

const projectsSlider = () => {
  const projectsSliderEl = document.querySelector(`.projects__slider`);

  if (projectsSliderEl) {
    var projectsSlider = new Flickity(projectsSliderEl, {
      cellAlign: "left",
      contain: true,
      freeScroll: false,
      pageDots: false,
      adaptiveHeight: false,
      lazyLoad: true,
      wrapAround: true,
      groupCells: false,
      imagesLoaded: true,
    });
  }
};

export { referenceSlider };
export { projectsSlider };
