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

  duration = 5;
  inOpacity = 0.9;
  outOpacity = 0.1;
  fadeStatus: FadeStatus;

  private inStatus: FadeStatus;

  private outStatus: FadeStatus;

  constructor() {
    this.inStatus = {
      value: 'in',
      params: {
        start: this.outOpacity,
        end: this.inOpacity,
        duration: `${this.duration}s`
      }
    };
    this.outStatus = {
      value: 'out',
      params: {
        start: this.inOpacity,
        end: this.outOpacity,
        duration: `${this.duration}s`
      }
    };
    this.fadeStatus = {
      value: 'in',
      params: {
        start: 0,
        end: this.inOpacity,
        duration: `${this.duration}s`
      }
    };
  }

  toInState() {
    this.fadeStatus = this.inStatus;
  }

  toOutState() {
    this.fadeStatus = this.outStatus;
  }

  updateInOpacity(event) {
    this.inOpacity  = event.value;
    this.refreshStatuses();
  }

  updateOutOpacity(event) {
    this.outOpacity  = event.value;
    this.refreshStatuses();
  }

  updateDuration(event) {
    this.duration = event.value;
    const durationStr = `${this.duration}s`;
    this.inStatus.params.duration = durationStr;
    this.outStatus.params.duration = durationStr;
    this.fadeStatus.params.duration = durationStr;
  }

  private refreshStatuses() {
    this.inStatus = {
      value: 'in',
      params: {
        start: this.outOpacity,
        end: this.inOpacity,
        duration: `${this.duration}s`
      }
    };
    this.outStatus = {
      value: 'out',
      params: {
        start: this.inOpacity,
        end: this.outOpacity,
        duration: `${this.duration}s`
      }
    };
  }
}
