import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface ApplicationAttributeInterface {
  id?: number;
  translateID?: number;
  attributeOptionID?: number;
  attbName: string;
  attbType: string;
  // TODO : change to translates
  translation: ITranslates;
}