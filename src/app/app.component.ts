import { Component } from '@angular/core';
import { componentLoader } from './interfaces/componentLoader';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public config: componentLoader = {
    components: [
      {
        selector: 'dropdown',
        component: DropdownComponent,
        componentConfig: {
          label: 'select number',
          items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        outputs: ['sendValue'],
      },
      {
        selector: 'hello',
        component: HelloComponent,
      },
      {
        selector: 'bye',
        component: ByeComponent,
      },
    ],
  };
  //#endregion Public Properties

  //#region Public Methodes
  receiveEvent(e: any) {
    console.log('from app component :', e);
  }}
