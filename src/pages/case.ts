import { BaseComponent } from "../components/baseComponent"
import "./case.scss"

export default class CasePage extends BaseComponent{
    constructor(color:string){
        super("div",["case"])
        this.element.style.setProperty("background-color",color)
    }
}