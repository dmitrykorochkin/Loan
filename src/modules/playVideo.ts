import YouTubePlayer from 'youtube-player'
import type { YouTubePlayer as IYouTubePlayer } from 'youtube-player/dist/types';

export default class VideoPlayer {
  btns: NodeListOf<HTMLButtonElement>
  overlay: HTMLElement
  close: HTMLElement
  player?: IYouTubePlayer
  path: any

  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll(
      triggers
    ) as NodeListOf<HTMLButtonElement>
    this.overlay = document.querySelector(overlay) as HTMLElement
    this.close = this.overlay.querySelector('.close') as HTMLElement
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      (this.player as IYouTubePlayer).stopVideo()
    })
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try{
        const blockedElem: HTMLElement = btn.closest('.module__video-item')?.nextElementSibling as HTMLElement

        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true')
        }
      } catch (e){}
      btn.addEventListener('click', () => {
        if( btn.closest('.module__video-item')?.getAttribute('data-disabled') !== 'true') {
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex'
            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');  
              this.player?.loadVideoById({ videoId: this.path })
            }
          } else {
            this.path = btn.getAttribute('data-url')
            this.createPlayer(this.path)
          }
        }
      })
    })
  }

  createPlayer(url: string) {
    this.player = YouTubePlayer('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    })
    this.overlay.style.display = 'flex '
  }

  onPlayerStateChange(state: any) {
    try{
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
  
      if (state.data === 0) {
        if (blockedElem.querySelector('.play__Circle').classList.remove('closed')) {
          blockedElem.querySelector('.play__Circle').classList.contains('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').append(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';
  
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch(e) {}
  }
  init() {
    this.bindTriggers()
    this.bindCloseBtn()
  }
}