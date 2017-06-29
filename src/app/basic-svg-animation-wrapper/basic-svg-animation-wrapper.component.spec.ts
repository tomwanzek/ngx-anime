import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSvgAnimationWrapperComponent } from './basic-svg-animation-wrapper.component';

xdescribe('BasicSvgAnimationWrapperComponent', () => {
  let component: BasicSvgAnimationWrapperComponent;
  let fixture: ComponentFixture<BasicSvgAnimationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSvgAnimationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSvgAnimationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
