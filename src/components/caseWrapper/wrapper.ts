import { translateElement } from '../../functions/translateElement';
import CasePage from '../../pages/case';
import { CASE_PAGES_DATA } from '../../renderData/renderData';
import { BaseComponent } from '../baseComponent';
import './wrapper.scss';

export default class CaseWrapper extends BaseComponent {
  cases: CasePage[];
  translate: number = 0;
  currentCase: number = 1;
  constructor() {
    super('div', ['wrapper']);
    this.cases = CASE_PAGES_DATA.map(
      (item) => new CasePage(item, this.scrollForward.bind(this), this.scrollBackward.bind(this))
    );

    this.cases.forEach((page) => this.element.append(page.element));

    this.backgroundChange();

    this.showInfo();

    this.element.onwheel = (ev) => {
      this.scroll(ev);
    };
  }

  backgroundChange() {
    this.element.style.background = CASE_PAGES_DATA[this.currentCase - 1].background;
  }

  scroll(ev: WheelEvent) {
    const width = (this.element.childNodes[0] as HTMLElement).offsetWidth;
    if (!width) return;
    const delta = ev.deltaY * 2;
    this.translate -= delta;
    if (delta < 0) {
      if (this.translate > 0) {
        this.translate = 0;
        this.currentCase = 1;
        translateElement(this.element, this.translate);
        this.backgroundChange();
        this.showInfo();
      } else if (this.translate > -width * (this.currentCase - 1)) {
        this.translate = -width * (this.currentCase - 2);
        translateElement(this.element, this.translate);

        this.translate = -width * (this.currentCase - 1);
        if (this.currentCase > 1) {
          this.currentCase--;
          this.backgroundChange();
          this.showInfo();
        }
        return;
      }
    }
    if (this.translate < -width * this.currentCase && this.currentCase < this.cases.length) {
      this.translate = -width * this.currentCase;
      translateElement(this.element, this.translate);
      this.currentCase++;
      this.backgroundChange();
      this.showInfo();
    } else if (this.translate < -width * this.cases.length) {
      this.translate = -width * this.currentCase;
    }
    return;
  }

  scrollForward() {
    console.log('f');
    const width = (this.element.childNodes[0] as HTMLElement).offsetWidth;
    if (this.currentCase < this.cases.length) {
      this.translate = -width * this.currentCase;
      translateElement(this.element, this.translate);
      this.currentCase++;
      this.showInfo();
      this.backgroundChange();
    }
  }

  scrollBackward() {
    const width = (this.element.childNodes[0] as HTMLElement).offsetWidth;
    if (this.currentCase > 1) {
      this.translate = -width * (this.currentCase - 2);
      translateElement(this.element, this.translate);
      this.translate = -width * (this.currentCase - 1);
      this.currentCase--;
      this.showInfo();
      this.backgroundChange();
    }
  }

  showInfo() {
    this.cases.forEach((page, index) => {
      if (index === this.currentCase - 1) {
        setTimeout(() => {
          page.info.element.classList.add('visible');
        }, 2000);
      } else {
        page.info.element.classList.remove('visible');
      }
    });
  }
}
