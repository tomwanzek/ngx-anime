import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiExtendedAnimationWrapperComponent } from './multi-extended-animation-wrapper.component';

// TODO: Updated tests

xdescribe('MultiExtendedAnimationWrapperComponent', () => {
  let component: MultiExtendedAnimationWrapperComponent;
  let fixture: ComponentFixture<MultiExtendedAnimationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiExtendedAnimationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiExtendedAnimationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
