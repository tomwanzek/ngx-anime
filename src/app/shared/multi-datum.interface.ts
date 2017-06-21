import { OpacityType } from './opacity.type';
import { MaterialColor } from './material-color.type';

export interface MultiDatum {
  id: string;
  opacity: OpacityType;
  color: MaterialColor;
}
