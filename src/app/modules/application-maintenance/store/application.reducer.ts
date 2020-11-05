import { createReducer, on } from '@ngrx/store';
import { create, remove, edit, update } from './application.actions';
import { IApplicationStore } from './../interface/application-store.interface';
import { LocalDataService } from './../../../shared/services/local-data.service';

export const initialState: IApplicationStore = {
  list: new LocalDataService().get('applications') || [],
  edit: null
};

const reducer = createReducer(
    initialState,
    on(create, (state, action) => createAttribute(state, action)),
    on(remove, (state, action) => removeApplication(state, action)),
    on(edit, (state, action) => editApplication(state, action)),
    on(update, (state, action) => updateApplication(state, action)),
);

function createAttribute(state, action): IApplicationStore {
    return {
      ...state,
      list: [...state.list, action.application]
    };
}

function removeApplication(state, action): IApplicationStore {
  return {
    ...state,
    list: [...state.list.filter( x => x.id !== action.id)]
  };
}

function editApplication(state, action): IApplicationStore {
  return {
    ...state,
    edit: action.application
  };
}

function updateApplication(state, action): IApplicationStore {
  return {
    ...state,
    edit: null,
    list: [
      ...state.list.map( x => {
        if (x.id === action.application.id){
          return {
            ...x,
            ...action.application
          };
        }
        return x;
      })
    ]
  };
}

export function applicationReducer(state, action): any{
    return reducer(state, action);
}
