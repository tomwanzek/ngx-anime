import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedAnimationWrapperComponent } from './extended-animation-wrapper.component';

describe('ExtendedAnimationWrapperComponent', () => {
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
