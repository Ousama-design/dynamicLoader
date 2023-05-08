import { AfterViewInit, Component, OnDestroy, OnInit,Input,Output,ViewChild, EventEmitter, ViewContainerRef, ComponentRef } from '@angular/core';
import { componentLoader } from '../interfaces/componentLoader';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'iris-component-loader',
  templateUrl: './iris-component-loader.component.html',
  styleUrls: ['./iris-component-loader.component.css']
})
export class IrisComponentLoaderComponent implements OnInit,AfterViewInit,OnDestroy {

  ngOnInit(): void {
    this.select = this.config.components[0].selector ?? '';
  }

  ngAfterViewInit(): void {
    this.loadComponent(this.select);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  //#region Public Properties
  @Input() public config!: componentLoader;
  public select = '';
  //#endRegion Public Properties

  //#startRegion Private Properties
  @Output() private sendEvent = new EventEmitter();
  @ViewChild('componentContainer', { read: ViewContainerRef })
  private container!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;
  private unsubscribe$ = new Subject<void>();
  //#endRegion Private Properties

  //#region Public Methodes
  public loadComponent(selector: string): void {
    const componentObj = this.config.components.find(
      (c) => c.selector === selector
    );
    if (componentObj) {
      const component = componentObj.component;

      this.container.clear();
      this.componentRef = this.container.createComponent(component);

      this.componentRef.instance.config &&
        this.componentRef.setInput('config', componentObj.componentConfig);

      componentObj.outputs &&
        componentObj.outputs.forEach((o) => {
          this.componentRef.instance[o]
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((e: any) => {
              this.sendEvent.emit(e);
            });
        });
    }
  }

}
