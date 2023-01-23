import Slider from "./slider";

interface IMiniSlider {
  page? :string, 
  next?: string, 
  prev?: string
}
export default class MiniSlider extends Slider {
  constructor({ page, next, prev } : IMiniSlider) {
    super({page, next, prev});
  }

   bindTriggers() {
    this.next.addEventListener('click', () => {
      this.page.append(this.slides[0]);
    });
    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1];
      this.page.insertBefore(active, this.slides[0])
    });
   }
  
   init() {
    this.page.style.cssText = `
      display:flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `

    this.bindTriggers();
  }
} 