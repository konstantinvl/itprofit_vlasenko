import { translateElement } from '../../functions/translateElement';
import CasePage from '../../pages/case';
import { BaseComponent } from '../baseComponent';
import './wrapper.scss';

const CASES = ['red', 'blue', 'red', 'blue'];

export default class CaseWrapper extends BaseComponent {
  cases: CasePage[];
  translate: number = 0;
  currentCase: number = 1;
  constructor() {
    super('div', ['wrapper']);
    this.cases = CASES.map((item) => new CasePage(item));

    this.cases.forEach((page) => this.element.append(page.element));

    this.element.onwheel = (ev) => {
      this.scroll(ev);
    };
  }

  scroll(ev: WheelEvent) {
    const width = (this.element.childNodes[0] as HTMLElement).offsetWidth;
    if (!width) return;
    const delta = ev.deltaY;

    this.translate -= ev.deltaY;

    if (delta < 0) {
      if (this.translate > 0) {
        this.translate = 0;
      } else if (this.translate > -width * (this.currentCase - 1)) {
        this.translate = -width * (this.currentCase - 1);
        translateElement(this.element, this.translate);
        if (this.currentCase > 0) {
          this.currentCase--;
        }
        return;
      }
    }

    if (this.translate < -width * this.currentCase) {
      this.translate = -width * this.currentCase;
      translateElement(this.element, this.translate);
      if (this.currentCase < this.cases.length - 1) {
        this.currentCase++;
      }
      return;
    }

    translateElement(this.element, this.translate);
  }
}
