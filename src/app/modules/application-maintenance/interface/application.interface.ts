import { IAttribute } from '../../attribute-maintenance/interface/attribute.interface';

export interface IApplication {
    id: string;
    systemID: string;
    allowMultiple?: boolean;
    attributes?: IAttribute[];
}
