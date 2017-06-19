export interface FadeStatusParameters {
  start?: number |'inherit';
  end?: number |'inherit';
  duration?: string;
};

export interface FadeStatus {
  value: 'in' | 'out';
  params: FadeStatusParameters
}
