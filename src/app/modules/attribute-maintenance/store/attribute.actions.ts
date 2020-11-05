import { createAction, props } from '@ngrx/store';
import { IOption } from '../interface/option.interface';
import { IAttribute } from './../interface/attribute.interface';

const component = '[Attribute Component]';

export const create = createAction(`${component } Create`, props<{ attribute: IAttribute }>());
export const remove = createAction(`${component } Remove`, props<{ id: string }>());
export const edit = createAction(`${component } Edit`, props<{ attribute: IAttribute }>());
export const update = createAction(`${component } Update`, props<{ attribute: IAttribute }>());
export const addOption = createAction(`${component } Add option`, props<{ id: string, option: IOption } >());
export const deleteOption = createAction(`${component } Delete option`, props<{ id: string }>());
export const setDefaultOption = createAction(`${component } Set Default option`, props<{ option: IOption }>());
