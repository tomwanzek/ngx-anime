import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiExtendedAnimationComponent } from './multi-extended-animation.component';

// TODO: Updated tests

xdescribe('MultiExtendedAnimationComponent', () => {
  let component: MultiExtendedAnimationComponent;
  let fixture: ComponentFixture<MultiExtendedAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiExtendedAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiExtendedAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
