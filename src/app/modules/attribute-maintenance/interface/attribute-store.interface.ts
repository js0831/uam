import { ApplicationAttributeInterface } from '../../../shared/interface/application-attribute.interface';
import { IAttribute } from './attribute.interface';

export interface IAttributeStore {
    list?: ApplicationAttributeInterface[];
    edit?: IAttribute;
}
