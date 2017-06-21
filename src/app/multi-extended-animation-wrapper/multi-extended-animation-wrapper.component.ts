import { Component } from '@angular/core';

import { MultiDatum } from '../multi-extended-animation/multi-extended-animation.component';

@Component({
  selector: 'app-multi-extended-animation-wrapper',
  templateUrl: './multi-extended-animation-wrapper.component.html',
  styleUrls: ['./multi-extended-animation-wrapper.component.css']
})
export class MultiExtendedAnimationWrapperComponent {

  duration: number = 2;
  durationStr: string = '2s'
  setting: 1 | 2;
  multi: MultiDatum[];

  private item2: MultiDatum = {
    id: 'Item 2',
    opacity: 0.8,
    color: 'primary'
  };

  constructor() {
    this.multi = [
      {
        id: 'Item 1',
        opacity: 0.7,
        color: 'accent'
      },
      this.item2
    ];
  }

  toSetting1() {
    this.multi = [
      {
        id: 'Item 1',
        opacity: 0.3,
        color: 'accent'
      },
      this.item2
    ];
    this.setting = 1;
  }

  toSetting2() {
    this.multi = [
      this.item2,
      {
        id: 'Item 3',
        opacity: 0.5,
        color: 'primary'
      },
      {
        id: 'Item 4',
        opacity: 0.9,
        color: 'accent'
      }

    ];
    this.setting = 2;
  }

  updateDuration(event) {
    this.duration = event.value
    this.durationStr = `${this.duration}s`;
  }
}
