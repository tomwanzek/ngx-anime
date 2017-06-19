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

  fadeStatus: FadeStatus = {
    value: 'in',
    params: {
      start: 0,
      end: 0.7,
      duration: '5s'
    }
  };

  toInState() {
    this.fadeStatus = {
      value: 'in',
      params: {
        start: 0,
        end: 0.7,
        duration: '1s'
      }
    };
  }

  toOutState() {
    this.fadeStatus = {
      value: 'out',
      params: {
        start: 0.7,
        end: 0,
        duration: '2s'
      }
    };
  }

}
