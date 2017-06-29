import { Component } from '@angular/core';

import {
  fadeBasic,
  FadeStatus,
  sizeBasic,
  SizeStatus
} from '../animations';

@Component({
  selector: 'app-basic-svg-animation-wrapper',
  templateUrl: './basic-svg-animation-wrapper.component.html',
  styleUrls: ['./basic-svg-animation-wrapper.component.css'],
  animations: [fadeBasic, sizeBasic]
})
export class BasicSvgAnimationWrapperComponent {


  duration = 2;
  inValue = 0.9;
  outValue = 0.1;
  fadeStatus: FadeStatus;
  sizeStatus: SizeStatus;
  fullRadius = 100;
  fullDiameter: number;

  private inStatus: FadeStatus;
  private outStatus: FadeStatus;

  private growStatus: SizeStatus;
  private shrinkStatus: SizeStatus;

  constructor() {
    this.fullDiameter = 2 * this.fullRadius;
    this.inStatus = {
      value: 'in',
      params: {
        start: this.outValue,
        end: this.inValue,
        duration: `${this.duration}s`
      }
    };
    this.outStatus = {
      value: 'out',
      params: {
        start: this.inValue,
        end: this.outValue,
        duration: `${this.duration}s`
      }
    };
    this.fadeStatus = {
      value: 'in',
      params: {
        start: 0,
        end: this.inValue,
        duration: `${this.duration}s`
      }
    };
    this.growStatus = {
      value: 'grow',
      params: {
        startRadius: (this.outValue * this.fullRadius) + 'px',
        numEndRadius: (this.inValue * this.fullRadius),
        endRadius: (this.inValue * this.fullRadius) + 'px',
        duration: `${this.duration}s`
      }
    };
    this.shrinkStatus = {
      value: 'shrink',
      params: {
        startRadius: (this.inValue * this.fullRadius) + 'px',
        numEndRadius: (this.outValue * this.fullRadius),
        endRadius: (this.outValue * this.fullRadius) + 'px',
        duration: `${this.duration}s`
      }
    };
    this.sizeStatus = {
      value: 'grow',
      params: {
        startRadius: '0px',
        numEndRadius: (this.inValue * this.fullRadius),
        endRadius: (this.inValue * this.fullRadius) + 'px',
        duration: `${this.duration}s`
      }
    };
  }

  toInState() {
    this.fadeStatus = this.inStatus;
    this.sizeStatus = this.growStatus;
  }

  toOutState() {
    this.fadeStatus = this.outStatus;
    this.sizeStatus = this.shrinkStatus;
  }

  updateInValue(event) {
    this.inValue = event.value;
    this.refreshStatuses();
  }

  updateOutValue(event) {
    this.outValue = event.value;
    this.refreshStatuses();
  }

  updateDuration(event) {
    this.duration = event.value;
    const durationStr = `${this.duration}s`;
    this.inStatus.params.duration = durationStr;
    this.outStatus.params.duration = durationStr;
    this.fadeStatus.params.duration = durationStr;
    this.growStatus.params.duration = durationStr;
    this.shrinkStatus.params.duration = durationStr;
    this.sizeStatus.params.duration = durationStr;
  }

  private refreshStatuses() {
    this.inStatus = {
      value: 'in',
      params: {
        start: this.outValue,
        end: this.inValue,
        duration: `${this.duration}s`
      }
    };
    this.outStatus = {
      value: 'out',
      params: {
        start: this.inValue,
        end: this.outValue,
        duration: `${this.duration}s`
      }
    };
    this.growStatus = {
      value: 'grow',
      params: {
        startRadius: (this.outValue * this.fullRadius) + 'px',
        numEndRadius: (this.inValue * this.fullRadius),
        endRadius: (this.inValue * this.fullRadius) + 'px',
        duration: `${this.duration}s`
      }
    };
    this.shrinkStatus = {
      value: 'shrink',
      params: {
        startRadius: (this.inValue * this.fullRadius) + 'px',
        numEndRadius: (this.outValue * this.fullRadius),
        endRadius: (this.outValue * this.fullRadius) + 'px',
        duration: `${this.duration}s`
      }
    };
  }

}
