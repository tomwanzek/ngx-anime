import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedAnimationWrapperComponent } from './extended-animation-wrapper.component';

// TODO: Updated tests

xdescribe('ExtendedAnimationWrapperComponent', () => {
  let component: ExtendedAnimationWrapperComponent;
  let fixture: ComponentFixture<ExtendedAnimationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedAnimationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedAnimationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
