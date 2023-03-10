export default class Difference {

  oldOfficer?: HTMLElement;
  newOfficer?: HTMLElement;
  oldCounter?: number;
  newCounter?: number;
  oldItems?: NodeList;
  newItems?: NodeList;

  constructor(oldOfficer: string, newOfficer: string, items: string) {

    try {
      this.oldOfficer = document.querySelector(oldOfficer) as HTMLElement;
      this.newOfficer = document.querySelector(newOfficer) as HTMLElement;
      this.oldCounter = 0;
      this.newCounter = 0;
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
    } catch(e) {}
  }

  bindTriggers(container: HTMLElement, items: NodeList, counter: number) {
    container.querySelector('.plus')?.addEventListener('click', () => {
      if (counter !== items.length - 2) {
        (items[counter] as HTMLElement).style.display = 'flex';
        counter++
      } else {
        (items[counter] as HTMLElement).style.display = 'flex';
       ( items[items.length - 1] as HTMLElement).remove();
      }
    });
  }

  hideItems(items:NodeList,) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }

  init() {
    try {
      this.hideItems(this.oldItems as NodeList);
      this.hideItems(this.newItems as NodeList);
      this.bindTriggers((this.oldOfficer as HTMLElement), (this.oldItems as NodeList), (this.oldCounter as number));
      this.bindTriggers((this.newOfficer as HTMLElement), (this.newItems as NodeList), (this.newCounter as number));
    } catch (e) {}
  }
}