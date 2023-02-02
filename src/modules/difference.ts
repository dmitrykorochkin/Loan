export default class Difference {

  oldOfficer: HTMLElement;
  newOfficer: HTMLElement;
  oldCounter: number;
  newCounter: number;
  oldItems: NodeList;
  newItems: NodeList;

  constructor(oldOfficer: string, newOfficer: string, items: string) {

    this.oldOfficer = document.querySelector(oldOfficer) as HTMLElement;
    this.newOfficer = document.querySelector(newOfficer) as HTMLElement;
    this.oldCounter = 0;
    this.newCounter = 0;
    this.newItems = this.newOfficer.querySelectorAll(items) as NodeList;
    this.oldItems = this.oldOfficer.querySelectorAll(items) as NodeList;
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
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}