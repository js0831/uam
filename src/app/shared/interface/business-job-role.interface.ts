import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface BusinessJobRoleInterface {
  id?: number;
  name: string;
  translation: ITranslates;
}