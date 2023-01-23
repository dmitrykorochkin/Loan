import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({btns: '.next', page: '.page', next: '', prev: ''});
  slider.render();

  const showUpSlider = new MiniSlider({
    page: '.showup__content-slider',
    prev: '.shopup__prev',
    next: '.shopup__next',
  });
  showUpSlider.init()

  const modulesSlider = new MiniSlider ({
    page: '.moules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
  })
  modulesSlider.init()

  const feedSlider = new MiniSlider ({
    page: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
  })
  feedSlider.init()
});