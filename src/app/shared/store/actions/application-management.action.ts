import { createAction, props } from '@ngrx/store';
import { IApplication } from '../../interfaces/i-application';

export const createApplication = createAction(
  '[APPLICATION] create application',
  props<{ payload: IApplication }>()
);