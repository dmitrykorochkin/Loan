import Slider from './modules/slider';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();

  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('module__video-item', '.overlay').init();
});