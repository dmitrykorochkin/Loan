export default class Difference {

  oldOfficer: HTMLElement;
  newOfficer: HTMLElement;
  items: Array<string>;

  constructor(oldOfficer: string, newOfficer: string, items: string[]) {

    this.oldOfficer = document.querySelector(oldOfficer) as HTMLElement;
    this.newOfficer = document.querySelector(newOfficer) as HTMLElement;
    this.items = items as string[];
  }
  hideItems() {
    this.oldOfficer.querySelectorAll(this.items as any).forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
    this.newOfficer.querySelectorAll(this.items as any).forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }
  init() {
    this.hideItems();
  }
}