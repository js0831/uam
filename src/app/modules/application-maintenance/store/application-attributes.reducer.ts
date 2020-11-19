import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { IApplicationStore } from './../interface/application-store.interface';
import { setApplicationAttributesListAction, addApplicationAttributeToListAction, removeApplicationAttributeFromListAction } from './application-attributes.actions';

export const initialState: IApplicationStore = {
  list: [],
};

const reducer = createReducer(
  initialState,
  on(setApplicationAttributesListAction, (state, action) => setListReducer(state, action)),
  on(addApplicationAttributeToListAction, (state, action) => addToListReducer(state, action)),
  on(removeApplicationAttributeFromListAction, (state, action) => removeFromListReducer(state, action))
);

function removeFromListReducer(state, action): IApplicationStore {
  return {
    ...state,
    list: state.list.filter(item => item.id !== action.payload.id)
  };
}

function addToListReducer(state, action): IApplicationStore {
  return {
    ...state,
    list: [...state.list, action.payload]
  };
}

function setListReducer(state, action): IApplicationStore {
  return {
    ...state,
    list: action.payload
  };
}

export function applicationAttributesReducer(state, action): any {
  return reducer(state, action);
}
