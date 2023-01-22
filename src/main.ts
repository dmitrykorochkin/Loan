import MainSlider from './modules/slider/slider-main';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({page: '.page',btns: '.next'});
  slider.render();
});