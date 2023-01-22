export default class Slider {
    page: HTMLElement;
    btns: NodeListOf<HTMLButtonElement>;
    slides: HTMLDivElement[];
    slideIndex: number;
    hanson: HTMLElement;

  constructor({page = '', btns = '', next = '', prev = ''} = {}) {
    this.page = document.querySelector(page) as HTMLElement;
    this.slides = Array.from(this.page.children) as HTMLDivElement[];  //обращение к дочерним элеменnам page
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.hanson = document.querySelector('.hanson') as HTMLElement;
  }

  
}