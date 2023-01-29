import YouTubePlayer from 'youtube-player'
import type {YouTubePlayer as IYouTubePlayer} from 'youtube-player/dist/types';

export default class VideoPlayer {
  btns: NodeListOf<HTMLButtonElement>
  overlay: HTMLElement
  close: HTMLElement
  player?: IYouTubePlayer

  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll(
      triggers
    ) as NodeListOf<HTMLButtonElement>
    this.overlay = document.querySelector(overlay) as HTMLElement
    this.close = this.overlay.querySelector('.close') as HTMLElement
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      (this.player as IYouTubePlayer).stopVideo()
    })
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex'
        } else {
          const path: string | null = btn.getAttribute('data-url')
          this.createPlayer(path as string)
        }
      })
    })
  }

  createPlayer(url: string) {
    this.player = YouTubePlayer('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    })
    this.overlay.style.display = 'flex '
  }
  init() {
    this.bindTriggers()
    this.bindCloseBtn()
  }
}