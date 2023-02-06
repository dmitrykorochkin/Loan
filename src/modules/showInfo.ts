export default class ShowInit {
  btns: NodeListOf<HTMLButtonElement>

  constructor(triggers : string) {
    this.btns = document.querySelectorAll(triggers) as NodeListOf<HTMLButtonElement>;
  }
  init() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const sibling: HTMLElement = (btn.closest('.module__info-show') as HTMLElement).nextElementSibling as HTMLElement;
        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    })
  }
}