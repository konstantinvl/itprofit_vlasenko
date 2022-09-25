import { BaseComponent } from '../baseComponent';
import './squareButton.scss';

export default class SquareButton extends BaseComponent {
  constructor(style: string | string[], onClick: () => void) {
    super('div', ['squareButton', ...style]);
    this.element.onclick = () => onClick();
  }
}
