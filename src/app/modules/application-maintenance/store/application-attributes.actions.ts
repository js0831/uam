import { createAction, props } from '@ngrx/store';
import { ApplicationAttributeInterface } from '../../../shared/interface/application-attribute.interface';

const component = '[Application Attributes]';

export const setApplicationAttributesListAction = createAction(`${component} Set List`, props<{ payload: ApplicationAttributeInterface[] }>());
export const addApplicationAttributeToListAction = createAction(`${component} Add to List`, props<{ payload: ApplicationAttributeInterface }>());
export const removeApplicationAttributeFromListAction = createAction(`${component} Remove from List`, props<{ payload: ApplicationAttributeInterface }>());