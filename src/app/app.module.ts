import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IrisComponentLoaderComponent } from './iris-component-loader/iris-component-loader.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IrisComponentLoaderComponent,
    HelloComponent,
    ByeComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
