import Slider, { ISlider } from './slider'

export default class MainSlider extends Slider {
  constructor({ page, btns }: ISlider) {
    super({ page, btns });
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.hanson.style.opacity = '0';

      if (n === 3) {
        this.hanson.classList.add('animated')
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch (e) {}
    
    this.slides.forEach(slide => {
      slide.style.display = 'none'
    })
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  bindTriggers() {
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

    document.querySelectorAll('.prevmodule').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1)
      })
    })
    document.querySelectorAll('.nextmodule').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1)
      })
    })
  }

  render() {
    if (this.page) {
      try {
        this.hanson = document.querySelector('.hanson') as HTMLElement;
      } catch (e) { }

      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}