import { newElem } from '../../functions/newElem';
import { BaseComponent } from '../baseComponent';

export default class CaseNotebook extends BaseComponent {
  constructor(image: string) {
    super('div', ['case_notebook']);

    const top = newElem('div', ['case_notebook_top']);
    const img = newElem('div', ['case_notebook_top-img']);
    img.style.background = `url(${image})`;
    top.append(img);

    const bottom = newElem('div', ['case_notebook_bottom']);
    const bottomHole = newElem('div', ['case_notebook_bottom-hole']);

    bottom.append(bottomHole);
    this.element.append(top, bottom);
  }
}
