import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  driven
} from '../animations';

import {
  MaterialColor,
  MultiDatum,
  OpacityType
} from '../shared';

interface ExtendedDataStatus {
  id: string;
  value: 'data';
  color: MaterialColor;
  params: {
    start: OpacityType;
    end: OpacityType;
    duration: string;
  }
}

@Component({
  selector: 'app-multi-extended-animation',
  templateUrl: './multi-extended-animation.component.html',
  styleUrls: ['./multi-extended-animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [driven]
})
export class MultiExtendedAnimationComponent implements OnChanges {

  @Input() multi: MultiDatum[] = [];
  @Input() duration: string = '1s';

  dataStates: ExtendedDataStatus[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const duration: string | null = changes['duration'] ? changes['duration'].currentValue : null;
    let eds: ExtendedDataStatus[] = [];

    if (changes['multi']) {
      let previousMulti: MultiDatum[] = changes['multi'].previousValue ? changes['multi'].previousValue : [];
      let currentMulti: MultiDatum[] = changes['multi'].currentValue ? changes['multi'].currentValue : [];
      let previousId2Index: { [key: string]: number } = {};
      let dataStatesId2Index: { [key: string]: number } = {};

      previousMulti.forEach((m, i) => { previousId2Index[m.id] = i });
      this.dataStates.forEach((ds, i) => { dataStatesId2Index[ds.id] = i });
      eds = currentMulti.map<ExtendedDataStatus>(m => {
        let id: string = m.id;
        let ds: ExtendedDataStatus;
        let pId = previousId2Index[id];
        if (pId !== undefined) {
          if (previousMulti[pId] === m) {
            ds = this.dataStates[dataStatesId2Index[id]];
            ds.params.duration = duration ? duration : this.duration;
          } else {
            ds = {
              id: id,
              value: 'data',
              color: m.color,
              params: {
                start: this.dataStates[dataStatesId2Index[id]].params.end,
                end: m.opacity,
                duration: duration ? duration : this.duration
              }
            }
          }
        } else {
          ds = {
            id: id,
            value: 'data',
            color: m.color,
            params: {
              start: 0,
              end: m.opacity,
              duration: duration ? duration : this.duration
            }
          }
        }
        return ds;
      });

    } else {
      eds = [...this.dataStates];
      eds.forEach(ds => { ds.params.duration = duration ? duration : this.duration; });
    }

    this.dataStates = eds;
  }

  trackById(index, item: ExtendedDataStatus) {
    return item.id;
  }

}
