import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  driven,
  DataStatus,
  DataStatusParams,
  OpacityType
} from '../animations';

export const DEFAULT_OPACITY = 1;
export const DEFAULT_DURATION = '1s';
export const DEFAULT_COLOR = 'accent';


@Component({
  selector: 'app-extended-animation',
  templateUrl: './extended-animation.component.html',
  styleUrls: ['./extended-animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [driven]
})
export class ExtendedAnimationComponent implements OnChanges {

  @Input() opacity: OpacityType;
  @Input() color: 'accent' | 'warn' = DEFAULT_COLOR;
  @Input() duration: string = DEFAULT_DURATION;

  dataStatus: DataStatus = {
    value: 'data',
    params: { start: 0, end: 0, duration: DEFAULT_DURATION }
  };

  ngOnChanges(changes: SimpleChanges) {
    let newStatus: DataStatus;
    const duration: string | null = changes['duration'] ? changes['duration'].currentValue : null;
    const opacity: OpacityType | null = changes['opacity'] ? changes['opacity'].currentValue : null;

    if (opacity !== null) {
      newStatus = {
        value: 'data',
        params: { ...this.dataStatus.params }
      };
      newStatus.params.start = newStatus.params.end;
      newStatus.params.end = opacity;
    } else {
      newStatus = this.dataStatus;
    }

    if (duration != null) {
      newStatus.params.duration = duration;
    }


    this.dataStatus = newStatus;

  }

}
