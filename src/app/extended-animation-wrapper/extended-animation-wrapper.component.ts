import { Component } from '@angular/core';

import {
  MaterialColor,
  OpacityType
} from '../shared';


@Component({
  selector: 'app-extended-animation-wrapper',
  templateUrl: './extended-animation-wrapper.component.html',
  styleUrls: ['./extended-animation-wrapper.component.css']
})
export class ExtendedAnimationWrapperComponent {

  duration: number = 2;
  durationStr: string = '2s';
  opacity: OpacityType = 1;
  color: MaterialColor = 'accent';
  data: 1 | 2;

  toData1() {
    this.opacity = 0.7;
    this.color = 'accent';
    this.data = 1;
  }

  toData2() {
    this.opacity = 0.3;
    this.color = 'warn';
    this.data = 2;
  }

  updateDuration(event) {
    this.duration = event.value
    this.durationStr = `${this.duration}s`;
  }
}
