import { IAttribute } from '../../attribute-maintenance/interface/attribute.interface';
import { ITranslates } from './i-translates.interface';

export interface IApplication {
    id?: string;
    applicationName: string;
    isAllowMultiple: boolean;
    attributes?: IAttribute[];
    // TODO : change to translates
    translations?: ITranslates;
}