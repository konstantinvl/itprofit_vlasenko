import { BaseComponent } from '../components/baseComponent';
import CaseBall from '../components/caseBall/caseBall';
import CaseInfo from '../components/caseInfo/caseInfo';
import CaseNotebook from '../components/caseNotebook/caseNotebook';
import { newElem } from '../functions/newElem';
import { BallData, CasePageData } from '../interfaces/interfaces';
import './case.scss';

export default class CasePage extends BaseComponent {
  title: HTMLElement = newElem('h3', ['case_title'], 'Кейс');
  info: CaseInfo;
  notebook: CaseNotebook;
  balls: CaseBall[];
  constructor(casePageInfo: CasePageData, forward: () => void, backward: () => void) {
    super('div', ['case']);

    this.info = new CaseInfo(casePageInfo.description, forward, backward);
    this.notebook = new CaseNotebook(casePageInfo.image);

    this.element.onmousemove = (ev) => {
      this.balls.forEach((ball) => ball.newCoordinates(ev.x, ev.y));
    };

    this.balls = this.createBalls(casePageInfo.balls, casePageInfo.ballBackground);

    this.combine();
  }

  createBalls(balls: BallData[], ballBack: string) {
    return balls.map((ball) => new CaseBall(ball, ballBack));
  }

  combine() {
    this.element.append(
      this.title,
      this.info.element,
      this.notebook.element,
      ...this.balls.map((ball) => ball.element)
    );
  }
}
