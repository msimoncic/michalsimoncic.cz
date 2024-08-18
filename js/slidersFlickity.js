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
      wrapAround: false,
      groupCells: false,
      imagesLoaded: true,
    });
  }
};

export { referenceSlider };
