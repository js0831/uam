import { createAction, props } from '@ngrx/store';
import { IApplication } from '../../interfaces/iapplication';

export const createApplication = createAction(
  '[APPLICATION] create application',
  props<{ payload: IApplication }>()
);