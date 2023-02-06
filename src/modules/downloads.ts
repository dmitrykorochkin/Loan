export default class Downloads {
  btns: NodeListOf<HTMLButtonElement>
  path: string

  constructor(triggers: string) {
    this.btns = document.querySelectorAll(triggers) as NodeListOf<HTMLButtonElement>;
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path: string) {
    const element: HTMLElement = document.createElement('a');
    element.setAttribute('href', path)
    element.setAttribute('download', 'nice_picture');
    element.style.display = 'none';
    document.body.append(element);

    element.click();

    document.body.remove();

  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.downloadItem(this.path);
      })
    })
  }

}