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

export const opacityAnimation = animation([
  style({
    opacity: '{{ start }}'
  }),
  animate(`{{ duration }}`, style({
    opacity: '{{ end }}'
  }))
], { params: { start: 0, end: 1, duration: '1s' } });

export const fadeExit = animation([
  style({ opacity: '*' }),
  animate('2s', style({ opacity: 0 }))
]);

export const driven = trigger(
  'driven',
  [
    transition(
      'void => data',
      [
        useAnimation(opacityAnimation)
      ],
      { params: { start: 0, end: 1, duration: '1s' } }
    ),
    transition(
      'data => void',
      [
        useAnimation(fadeExit)
      ]
    ),
    transition(
      'data <=> data',
      [
        useAnimation(opacityAnimation)
      ],
      { params: { start: 1, end: 1, duration: '1s' } }
    )
  ]
);
