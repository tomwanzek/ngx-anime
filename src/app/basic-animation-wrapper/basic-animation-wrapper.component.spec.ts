import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnimationWrapperComponent } from './basic-animation-wrapper.component';

// TODO: Updated tests

xdescribe('BasicAnimationWrapperComponent', () => {
  let component: BasicAnimationWrapperComponent;
  let fixture: ComponentFixture<BasicAnimationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAnimationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAnimationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
