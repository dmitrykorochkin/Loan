export default class Slider {
    page: HTMLElement;
    btns: NodeListOf<HTMLButtonElement>;
    slides: HTMLDivElement[];
    slideIndex: number;
    hanson: HTMLElement;

  constructor(page:string , btns:string ) {
    this.page = document.querySelector(page) as HTMLElement;
    this.slides = Array.from(this.page.children) as HTMLDivElement[];  //обращение к дочерним элеменnам page
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.hanson = document.querySelector('.hanson') as HTMLElement;
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try{
      this.hanson.style.opacity = '0';

      if(n === 3) {
        this.hanson.classList.add('animated')
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch (e) {

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
    try{
      this.hanson = document.querySelector('.hanson') as HTMLElement;
    } catch (e) {
      
    }
    
    this.btns.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
      });

      (btn.parentNode as HTMLElement).previousElementSibling?.addEventListener('click', (e: Event) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      })
    })
    this.showSlides(this.slideIndex);
  }
}