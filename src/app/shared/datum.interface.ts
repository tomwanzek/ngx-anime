import { OpacityType } from './opacity.type';

export interface DatumParams {
  start: OpacityType;
  end: OpacityType;
  duration: string;
}

export interface Datum {
  value: 'data';
  params: DatumParams;
}
