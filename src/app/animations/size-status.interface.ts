export interface SizeStatusParameters {
  startRadius?: string;
  endRadius?: string;
  numEndRadius?: number;
  duration?: string;
};

export interface SizeStatus {
  value: 'shrink' | 'grow';
  params: SizeStatusParameters
}
