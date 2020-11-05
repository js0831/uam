import { IApplication } from './application.interface';

export interface IApplicationStore {
    list?: IApplication[];
    edit?: IApplication;
}
