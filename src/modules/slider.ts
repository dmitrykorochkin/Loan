export default class Slider {
    page: HTMLElement;
    btns: NodeListOf<HTMLButtonElement>;
    slides: HTMLDivElement[];
    slideIndex: number;

  constructor(page:string , btns:string ) {
    this.page = document.querySelector(page) as HTMLElement;
    this.slides = Array.from(this.page.children) as HTMLDivElement[];  //обращение к дочерним элеменnам page
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.style.display = 'none'
    })
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  render() {
    this.btns.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
      })

      btn.parentNode?.previousSibling?.addEventListener('click', (e: Event) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      })
    })
    this.showSlides(this.slideIndex);
  }
}