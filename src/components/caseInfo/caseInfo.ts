import { newElem } from '../../functions/newElem';
import { InfoCase } from '../../interfaces/interfaces';
import { BaseComponent } from '../baseComponent';
import SquareButton from '../squareButton/squareButton';
import './caseinfo.scss';

export default class CaseInfo extends BaseComponent {
  infoTitle: HTMLElement;
  infoDescription: HTMLElement;

  buttonWrapper: HTMLElement = newElem('div', ['case_info_button-wrapper']);
  forwardButton: SquareButton;
  backwardButton: SquareButton;

  infoTable: HTMLElement = newElem('div', ['case_info_table']);
  infoProps: InfoCase;

  constructor(info: InfoCase, forward: () => void, backward: () => void) {
    super('div', ['case_info']);
    this.infoProps = info;
    this.infoTitle = newElem('h4', ['case_info_title'], info.title);
    this.infoDescription = newElem('section', ['case_info_description'], info.description);

    this.forwardButton = new SquareButton(['forward'], forward);
    this.backwardButton = new SquareButton(['backward'], backward);

    this.buttonWrapper.append(this.backwardButton.element, this.forwardButton.element);

    this.combineInfoTable();
    this.combine();
  }

  combine() {
    this.element.append(this.infoTitle, this.infoDescription, this.buttonWrapper, this.infoTable);
  }

  createInfoTablePart(title: string, value: string): HTMLElement {
    const part = newElem('div', ['case_info_table-part']);
    const titleElem = newElem('div', ['case_info_table-part_title'], title);
    const valueElem = newElem('div', ['case_info_table-part_value'], value);
    part.append(titleElem, valueElem);
    return part;
  }

  combineInfoTable() {
    this.infoTable.append(
      this.createInfoTablePart('Направление', this.infoProps.branch),
      this.createInfoTablePart('Тип проекта', this.infoProps.type),
      this.createInfoTablePart('Отрасль', this.infoProps.industry)
    );
  }
}
