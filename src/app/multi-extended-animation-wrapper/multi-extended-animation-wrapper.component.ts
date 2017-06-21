import { Component } from '@angular/core';

import { MultiDatum } from '../shared';


const item2: MultiDatum = {
  id: 'Item 2',
  opacity: 0.8,
  color: 'primary'
};

const data1: MultiDatum[] = [
  {
    id: 'Item 1',
    opacity: 0.2,
    color: 'accent'
  },
  item2
];

const data2: MultiDatum[] = [
  {
    id: 'Item 1',
    opacity: 0.7,
    color: 'accent'
  },
  item2,
];

const data3: MultiDatum[] = [
  item2,
  {
    id: 'Item 3',
    opacity: 0.5,
    color: 'primary'
  },
  {
    id: 'Item 4',
    opacity: 0.9,
    color: 'warn'
  }
];

@Component({
  selector: 'app-multi-extended-animation-wrapper',
  templateUrl: './multi-extended-animation-wrapper.component.html',
  styleUrls: ['./multi-extended-animation-wrapper.component.css']
})
export class MultiExtendedAnimationWrapperComponent {

  duration: number = 2;
  durationStr: string = '2s'
  data: 1 | 2 | 3;
  multi: MultiDatum[];


  constructor() {
    this.multi = data1;
    this.data = 1;
  }

  toData1() {
    this.multi = data1;
    this.data = 1;
  }

  toData2() {
    this.multi = data2;
    this.data = 2;
  }

  toData3() {
    this.multi = data3;
    this.data = 3;
  }

  updateDuration(event) {
    this.duration = event.value
    this.durationStr = `${this.duration}s`;
  }
}
