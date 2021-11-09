const slider = document.querySelector('[data-slider]');

let i = 1;
slider.style.transform = `translateX(${-i * 600}px)`;

document.querySelector('[data-button-next]').addEventListener('click', () => {
  i += 1;
  slider.style.transform = `translateX(${-i * 600}px)`;
});

document.querySelector('[data-button-prev]').addEventListener('click', () => {
  i -= 1;
  slider.style.transform = `translateX(${-i * 600}px)`;
});
