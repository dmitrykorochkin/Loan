export default class VideoPlayer {
  btns: NodeListOf<HTMLButtonElement>;
  overlay: HTMLElement;
  close: HTMLElement;

  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll(triggers) as NodeListOf<HTMLButtonElement>;;
    this.overlay = document.querySelector(overlay) as HTMLElement;
    this.close = this.overlay.querySelector('.close') as HTMLElement;
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex'
        } else {
          const path: string | null = btn.getAttribute('data-url');
          this.createPlayer(path);
        }

      })
    })
  }

  createPlayer(url: string) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
    });
    this.overlay.style.display = 'flex '
  }
  init() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    this.bindTriggers()
    this.bindCloseBtn()
  }
}