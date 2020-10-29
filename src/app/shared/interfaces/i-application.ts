import { ITranslation } from './i-translation';

export interface IApplication {
  id?: number;
  applicationId: string;
  allowMultiple?: boolean;
  translateID?: number;
  roleAttributeID?: number;

  translation?: ITranslation;
}