import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor({
    page,
    next,
    prev
  } : {
    page? :string, 
    next?: string, 
    prev?: string
  }) {
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