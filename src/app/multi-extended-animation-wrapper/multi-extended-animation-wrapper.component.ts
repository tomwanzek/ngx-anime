import { Component } from '@angular/core';

import { MultiDatum } from '../multi-extended-animation/multi-extended-animation.component';

@Component({
  selector: 'app-multi-extended-animation-wrapper',
  templateUrl: './multi-extended-animation-wrapper.component.html',
  styleUrls: ['./multi-extended-animation-wrapper.component.css']
})
export class MultiExtendedAnimationWrapperComponent {

  duration: string = '2s';
  setting: 1 | 2;
  multi: MultiDatum[] = [
    {
      id: 'm1',
      opacity: 0.7,
      color: 'accent'
    }
  ];

  toSetting1() {
    this.multi = [
      {
        id: 'm1',
        opacity: 0.3,
        color: 'accent'
      },
      {
        id: 'm2',
        opacity: 0.8,
        color: 'primary'
      }
    ];
    this.setting = 1;
  }

  toSetting2() {
    this.multi = [
      {
        id: 'm2',
        opacity: 0.3,
        color: 'accent'
      },
      {
        id: 'm3',
        opacity: 0.5,
        color: 'primary'
      },
      {
        id: 'm4',
        opacity: 0.9,
        color: 'accent'
      }

    ];
    this.setting = 2;
  }


}
