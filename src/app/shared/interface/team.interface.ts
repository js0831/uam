import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface TeamInterface {
  id?: number;
  name: string;
  translation: ITranslates;
}