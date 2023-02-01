import Slider from "./slider";
import type { ISlider } from "./slider";

export default class MiniSlider extends Slider {
  constructor({ page, next, prev, activeClass, animate, autoplay }: ISlider) {
    super({ page, next, prev, activeClass, animate, autoplay });
  }
  decorizeSlides() {
    (this.slides as HTMLDivElement[]).forEach(slide => {
      slide.classList.remove(this.activeClass)
      if (this.animate) {
        (slide.querySelector('.card__title') as HTMLElement).style.opacity = '0.4';
        (slide.querySelector('.card__controls-arrow') as HTMLElement).style.opacity = '0';
      }
    })
    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass)
    }

    if (this.animate) {
      (this.slides[0].querySelector('.card__title') as HTMLElement).style.opacity = '1';
      (this.slides[0].querySelector('.card__controls-arrow') as HTMLElement).style.opacity = '1'
    }
  }
  nextSlide() {
    this.page.append(this.slides[0]);
    this.slides.push(this.slides[0]);
    this.slides.shift();
    this.decorizeSlides();
  }

  prevSlide() {
    const active = this.slides[this.slides.length - 1];
    this.page.insertBefore(active, this.slides[0]);
    this.slides.unshift(this.slides[this.slides.length - 1]);
    this.slides.pop()
  }

  bindTriggers() {
    this.next?.addEventListener('click', () => this.nextSlide());
    this.prev?.addEventListener('click', () => this.prevSlide());
  }

  init() {
    try{
      this.page.style.cssText = `
      display:flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `

    this.bindTriggers();
    this.decorizeSlides();

    if (this.autoplay) {
      setInterval(() => this.nextSlide(), 5000);
    }
    } catch(e){}
  }
}