import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedAnimationComponent } from './extended-animation.component';

// TODO: Updated tests

xdescribe('ExtendedAnimationComponent', () => {
  let component: ExtendedAnimationComponent;
  let fixture: ComponentFixture<ExtendedAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
