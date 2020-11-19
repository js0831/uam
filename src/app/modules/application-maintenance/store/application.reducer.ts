import { createReducer, on } from '@ngrx/store';
import { create, remove, edit, update, setList } from './application.actions';
import { IApplicationStore } from './../interface/application-store.interface';

export const initialState: IApplicationStore = {
  list: [],
  edit: null
};

const reducer = createReducer(
    initialState,
    on(create, (state, action) => createApplication(state, action)),
    on(setList, (state, action) => setApplicationList(state, action)),
    on(remove, (state, action) => removeApplication(state, action)),
    on(edit, (state, action) => editApplication(state, action)),
    on(update, (state, action) => updateApplication(state, action)),
);

function setApplicationList(state, action): IApplicationStore {
  return {
    ...state,
    list: action.payload
  };
}

function createApplication(state, action): IApplicationStore {
    return {
      ...state,
      list: [...state.list, action.payload]
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
