const slider = document.querySelector('[data-slider]');

let i = 1;
slider.style.transform = `translateX(${-i * 600}px)`;

document.querySelector('[data-button-next]').addEventListener('click', () => {
  slider.style.transition = 'transform 300ms ease-in-out';

  if (i <= 5) {
    i += 1;
    slider.style.transform = `translateX(${-i * 600}px)`;
  }
});

document.querySelector('[data-button-prev]').addEventListener('click', () => {
  slider.style.transition = 'transform 300ms ease-in-out';

  if (i >= 1) {
    i -= 1;
    slider.style.transform = `translateX(${-i * 600}px)`;
  }
});

slider.addEventListener('transitionend', () => {
  slider.style.transition = 'none';

  if (i === 0) {
    i = 5;
  }
  if (i === 6) {
    i = 1;
  }

  slider.style.transform = `translateX(${-i * 600}px)`;
});
