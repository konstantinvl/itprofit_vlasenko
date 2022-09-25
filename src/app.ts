import { BaseComponent } from "./components/baseComponent";
import CaseWrapper from "./components/wrapper/wrapper";
import { newElem } from "./functions/newElem";

export class App extends BaseComponent {
    caseWrapper: CaseWrapper
    constructor(){
        super('div', ['app']);
        this.caseWrapper= new CaseWrapper()
        

        this.element.append(this.caseWrapper.element)
        

    }

}