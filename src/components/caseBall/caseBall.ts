import { BallData } from '../../interfaces/interfaces';
import { BaseComponent } from '../baseComponent';
import './caseBall.scss';

export default class CaseBall extends BaseComponent {
  top: number;
  left: number;
  size: number;
  constructor(ball: BallData, ballBack: string) {
    super('div', ['case_ball']);

    this.top = ball.top;
    this.left = ball.left;
    this.size = ball.size;

    this.element.setAttribute('style', ballBack);

    this.element.style.height = ball.size + 'px';
    this.element.style.width = ball.size + 'px';
    this.element.style.top = ball.top + 'px';
    this.element.style.left = ball.left + 'px';

    this.element;
  }

  newCoordinates(x: number, y: number) {
    const tg = (y - this.top + this.size / 2) / (x - this.left + this.size / 2);
    console.log(tg);
    const deg = Math.atan(tg);
    console.log(deg);
    const sin = Math.sin(deg);
    const newY = sin * this.size;
    const newX = newY / tg;

    this.element.style.top = newY + this.size / 2 + 'px';
    this.element.style.left = newX + this.size / 2 + 'px';
  }
}
