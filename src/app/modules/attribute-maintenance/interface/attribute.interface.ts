import { IOption } from './option.interface';

export interface IAttribute {
    guid?: string;
    id: string;
    type: string;
    options?: IOption[];
}
