import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Downloads from './modules/downloads';


window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ btns: '.next', page: '.page' });
  slider.render();

  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('.module__video-item', '.overlay').init();

  const modulePageSlider = new MainSlider({page: '.moduleapp', btns: '.next'});
  modulePageSlider.render();


  const showUpSlider = new MiniSlider({
    page: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init()

  const modulesSlider = new MiniSlider({
    page: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true

  })
  modulesSlider.init()

  const feedSlider = new MiniSlider({
    page: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  })
  feedSlider.init()
  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();

  new Difference('.officerold', '.officernew', '.officer__card-item').init();
  new Form('.form').init()

  new ShowInfo('.plus__content').init()
  new Downloads('.download').init()

});