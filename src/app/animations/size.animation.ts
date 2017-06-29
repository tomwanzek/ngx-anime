import {
  animate,
  animateChild,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

export const sizeGrow = animation([
  style({
    r: '{{ startRadius }}'
  }),
  animate(`{{ duration }}`, style({
    r: '{{ endRadius }}'
  }))
], { params: { startRadius: 0, endRadius: 100, duration: '1s' } });

export const sizeShrink = animation([
  style({
    r: '{{ startRadius }}'
  }),
  animate(`{{ duration }}`,
    style({
      r: '{{ endRadius }}'
    }))
], { params: { startRadius: 100, endRadius: 0, duration: '1s' } });

export const sizeBasic = trigger(
  'sizeBasic',
  [
    transition(
      '* => grow',
      [
        useAnimation(sizeGrow)
      ],
      { params: { startRadius: 0, endRadius: 100, duration: '1s' } }
    ),
    transition(
      '* => shrink',
      [
        useAnimation(sizeShrink)
      ],
      { params: { startRadius: 100, endRadius: 0, duration: '3s' } }
    )
  ]
);

