export interface ISlider {
  page: string | null;
  btns?: string | null;
  next?: string | null;
  prev?: string | null;
  animate?: boolean;
  autoplay?: boolean;
  activeClass?: string | null;
}
export default class Slider {
  page: HTMLElement;
  btns: NodeListOf<HTMLButtonElement>;
  slides: HTMLDivElement[];
  slideIndex: number;
  hanson: HTMLElement;
  next: HTMLElement;
  prev: HTMLElement;
  animate: boolean;
  autoplay: boolean;
  activeClass: string;

  constructor({
    page = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = null,
    animate = false,
    autoplay = false
  }: ISlider) {

    this.page = document.querySelector(page as string) as HTMLElement;
    this.slides = (Array.from(this.page?.children || [])  as HTMLDivElement[]).filter(slide => slide.tagName !== 'BUTTON')
    this.btns = document.querySelectorAll(btns as string);
    this.next = document.querySelector(next as string) as HTMLDivElement;
    this.prev = document.querySelector(prev as string) as HTMLDivElement;
    this.slideIndex = 1;
    this.hanson = document.querySelector('.hanson') as HTMLElement;
    this.activeClass = activeClass || '';
    this.animate = Boolean(animate),
    this.autoplay = Boolean(autoplay)
  }
}