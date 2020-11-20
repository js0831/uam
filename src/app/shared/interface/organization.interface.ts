import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface OrganizationInterface {
  id?: number;
  name: string;
  translation: ITranslates;
}