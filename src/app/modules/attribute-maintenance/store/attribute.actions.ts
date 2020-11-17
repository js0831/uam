import { createAction, props } from '@ngrx/store';
import { ApplicationAttributeInterface } from '../../../shared/interface/application-attribute.interface';
import { IOption } from '../interface/option.interface';
import { IAttribute } from './../interface/attribute.interface';

const component = '[Attribute Component]';

export const set = createAction(`${component } Set`, props<{ payload: ApplicationAttributeInterface[] }>());
export const create = createAction(`${component } Create`, props<{ attribute: ApplicationAttributeInterface }>());
export const remove = createAction(`${component } Remove`, props<{ payload: string }>());
export const edit = createAction(`${component } Edit`, props<{ attribute: ApplicationAttributeInterface }>());
export const update = createAction(`${component } Update`, props<{ attribute: ApplicationAttributeInterface }>());
export const addOption = createAction(`${component } Add option`, props<{ id: string, option: IOption } >());
export const deleteOption = createAction(`${component } Delete option`, props<{ id: string }>());
export const setDefaultOption = createAction(`${component } Set Default option`, props<{ option: IOption }>());
