export function enableAutoScrollOnHover(containerSelector, imageSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const image = container.querySelector(imageSelector);

    if (image) {
      container.addEventListener("mouseenter", () => {
        image.style.transition = "transform 3s linear";
        image.style.transform = `translateY(-${
          image.clientHeight - container.clientHeight
        }px)`;
      });

      container.addEventListener("mouseleave", () => {
        image.style.transition = "transform 1s linear";
        image.style.transform = "translateY(0)";
      });
    } else {
      console.error("Image not found in container:", container);
    }
  });
}
