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

  init() {
    this.page.style.cssText = `
      display:flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `
  }
} 