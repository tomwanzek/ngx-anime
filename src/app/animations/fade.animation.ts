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

export const fadeIn = animation([
  style({
    opacity: '{{ start }}'
  }),
  animate(`{{ duration }}`, style({
    opacity: '{{ end }}'
  }))
], { params: { start: 0, end: 1, duration: '1s' } });

export const fadeOut = animation([
  style({
    opacity: '{{ start }}'
  }),
  animate(`{{ duration }}`,
    style({
      opacity: '{{ end }}'
    }))
], { params: { duration: '1s', start: 1, end: 0 } });

export const fadeBasic = trigger(
  'fadeBasic',
  [
    transition(
      '* => in',
      [
        useAnimation(fadeIn)
      ],
      { params: { start: 0.1, end: 0.6, duration: '1s' } }
    ),
    transition(
      '* => out',
      [
        useAnimation(fadeOut)
      ],
      { params: { duration: '5s', start: 1, end: 0 } }
    )
  ]
);

