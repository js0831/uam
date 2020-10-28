import { Action, createReducer, on } from '@ngrx/store';
import { IApplication } from '../../interfaces/i-application';
import * as ApplicationManagementActions from '../actions/application-management.action';

export interface IApplicationManagement {
  applications: IApplication[];
}

export const initialState: IApplicationManagement = {
  applications: []
};

const applicationManagementReducer = createReducer(
  initialState,
  on(ApplicationManagementActions.createApplication, (state, action) => ({
    ...state,
    ...action.payload
  }))
);

export function reducer(state: IApplicationManagement, action: Action) {
  return applicationManagementReducer(state, action);
}