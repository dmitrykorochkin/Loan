import { isTemplateNode } from "@vue/compiler-core";

export default class Difference {

  oldOfficer: HTMLElement;
  newOfficer: HTMLElement;
  oldCounter: number;
  newCounter: number;
  oldItems: Array<string>;
  newItems: Array<string>;

  constructor(oldOfficer: string, newOfficer: string, items: string) {

    this.oldOfficer = document.querySelector(oldOfficer) as HTMLElement;
    this.newOfficer = document.querySelector(newOfficer) as HTMLElement;
    this.oldCounter = 0;
    this.newCounter = 0;
    this.newItems = this.newOfficer.querySelectorAll(items) as any;
    this.oldItems = this.oldOfficer.querySelectorAll(items) as any;
  }

  bindTriggers(container: HTMLElement, items: string[], counter: number) {
    container.querySelector('.plus')?.addEventListener('click', () => {
      if (counter !== items.length - 2) {
        (items as any)[counter].style.display = 'flex';
        counter++
      } else {
        (items as any)[counter].style.display = 'flex';
        (items as any)[items.length - 1].remove();
      }
    });
  }

  hideItems(items: any[],) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
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