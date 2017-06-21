import { Component } from '@angular/core';

import { OpacityType } from '../animations';


@Component({
  selector: 'app-extended-animation-wrapper',
  templateUrl: './extended-animation-wrapper.component.html',
  styleUrls: ['./extended-animation-wrapper.component.css']
})
export class ExtendedAnimationWrapperComponent {

  duration: number = 2;
  durationStr: string = '2s';
  opacity: OpacityType = 1;
  color: 'accent' | 'warn' = 'accent';
  setting: 1 | 2;

  toSetting1() {
    this.opacity = 0.7;
    this.color = 'accent';
    this.setting = 1;
  }

  toSetting2() {
    this.opacity = 0.3;
    this.color = 'warn';
    this.setting = 2;
  }

  updateDuration(event) {
    this.duration = event.value
    this.durationStr = `${this.duration}s`;
  }
}
