import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface ApplicationAttributeOptionInterface {
  id?: string;
  isDefault: boolean;
  translation: ITranslates;
  value: string;
}