import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisComponentLoaderComponent } from './iris-component-loader.component';

describe('IrisComponentLoaderComponent', () => {
  let component: IrisComponentLoaderComponent;
  let fixture: ComponentFixture<IrisComponentLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrisComponentLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrisComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
