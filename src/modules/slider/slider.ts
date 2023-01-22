export default class Slider {
    page: HTMLElement;
    btns: NodeListOf<HTMLButtonElement>;
    slides: HTMLDivElement[];
    slideIndex: number;
    hanson: HTMLElement;
    next: HTMLElement;
    prev: HTMLElement;

  constructor({page = '', btns = '', next = '', prev = ''} = {}) {
    this.page = document.querySelector(page) as HTMLElement;
    this.slides = Array.from(this.page.children) as HTMLDivElement[];  //обращение к дочерним элеменnам page
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next) as HTMLDivElement;
    this.prev = document.querySelector(prev) as HTMLDivElement;
    this.slideIndex = 1;
    this.hanson = document.querySelector('.hanson') as HTMLElement;
  }

  
}