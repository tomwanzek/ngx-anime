export interface FadeStatusParameters {
  start?: number;
  end?: number;
  duration?: string;
};

export interface FadeStatus {
  value: 'in' | 'out';
  params: FadeStatusParameters
}
