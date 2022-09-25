import { BaseComponent } from './components/baseComponent';
import CaseWrapper from './components/caseWrapper/wrapper';

export class App extends BaseComponent {
  caseWrapper: CaseWrapper;
  constructor() {
    super('div', ['app']);
    this.caseWrapper = new CaseWrapper();

    this.element.append(this.caseWrapper.element);
  }
}
