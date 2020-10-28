import { ITranslation } from './i-translation';

export interface IApplication {
  id?: number;
  systemId: string;
  translation?: ITranslation;
  allowMultiple?: boolean;
  translateID?: number;
  roleAttributeID?: number;
}