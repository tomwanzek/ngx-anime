import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiExtendedAnimationWrapperComponent } from './multi-extended-animation-wrapper.component';

describe('MultiExtendedAnimationWrapperComponent', () => {
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
