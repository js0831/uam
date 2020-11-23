import { createAction, props } from '@ngrx/store';
import { ApplicationAttributeOptionInterface } from '../../../shared/interface/application-attribute-option.interface';
import { ApplicationAttributeInterface } from '../../../shared/interface/application-attribute.interface';
import { IOption } from '../interface/option.interface';

const component = '[Attribute Component]';

export const set = createAction(`${component } Set`, props<{ payload: ApplicationAttributeInterface[] }>());
export const create = createAction(`${component } Create`, props<{ attribute: ApplicationAttributeInterface }>());
export const remove = createAction(`${component } Remove`, props<{ payload: string }>());
export const edit = createAction(`${component } Edit`, props<{ attribute: ApplicationAttributeInterface }>());
export const update = createAction(`${component } Update`, props<{ attribute: ApplicationAttributeInterface }>());
export const addOption = createAction(`${component } Add option`, props<{ id: number, option: ApplicationAttributeOptionInterface } >());
export const setOptionsOnEdit = createAction(`${component } Set options`, props<{ payload: ApplicationAttributeOptionInterface[] }>());
export const deleteOption = createAction(`${component } Delete option`, props<{ id: string }>());
export const updateOptionInEdit = createAction(`${component } Update option`, props<{ payload: ApplicationAttributeOptionInterface }>());
export const setDefaultOption = createAction(`${component } Set Default option`, props<{ option: IOption }>());
