import { ITranslates } from '../../modules/application-maintenance/interface/i-translates.interface';

export interface ChannelInterface {
  id?: number;
  name: string;
  translation: ITranslates;
}