import { createAction, props } from '@ngrx/store';
import { IApplication } from '../interface/application.interface';

const component = '[Application Component]';

export const create = createAction(`${component} Create`, props<{ application: IApplication }>());
export const remove = createAction(`${component} Remove`, props<{ id: string }>());
export const edit = createAction(`${component } Edit`, props<{ application: IApplication }>());
export const update = createAction(`${component } Update`, props<{ application: IApplication }>());

