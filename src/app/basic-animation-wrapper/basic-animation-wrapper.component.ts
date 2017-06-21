import { Component } from '@angular/core';

import {
  fadeBasic,
  FadeStatus
} from '../animations';

@Component({
  selector: 'app-basic-animation-wrapper',
  templateUrl: './basic-animation-wrapper.component.html',
  styleUrls: ['./basic-animation-wrapper.component.css'],
  animations: [fadeBasic]
})
export class BasicAnimationWrapperComponent {

  duration: number = 5;

  fadeStatus: FadeStatus = {
    value: 'in',
    params: {
      start: 0,
      end: 0.7,
      duration: `${this.duration}s`
    }
  };

  toInState() {
    this.fadeStatus = {
      value: 'in',
      params: {
        start: 0,
        end: 0.7,
        duration: `${this.duration}s`
      }
    };
  }

  toOutState() {
    this.fadeStatus = {
      value: 'out',
      params: {
        start: 0.7,
        end: 0,
        duration: `${this.duration}s`
      }
    };
  }

  updateDuration(event) {
    this.duration = event.value
    this.fadeStatus.params.duration = `${this.duration}s`;
  }
}
