import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Dropdown } from '../interfaces/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() public config: Dropdown = {};
  public select = '';
  //#endRegion Public Properties

  //#startRegion Private Properties
  @Output() private sendValue = new EventEmitter();
  //#endRegion Private Properties

  //#region Public Methodes
  public change() {
    this.sendValue.emit(this.select);
  }

}
