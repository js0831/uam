import { createReducer, on } from '@ngrx/store';
import { IAttributeStore } from '../interface/attribute-store.interface';
import { deleteOption, setOptionsOnEdit, addOption, create, edit, remove, update, setDefaultOption, set } from './attribute.actions';

export const initialState: IAttributeStore = {
  list: [],
  edit: null
};

const reducer = createReducer(
    initialState,
    on(set, (state, action) => setAttribute(state, action)),
    on(create, (state, action) => createAttribute(state, action)),
    on(remove, (state, action) => removeAttribute(state, action)),
    on(edit, (state, action) => editAttribute(state, action)),
    on(update, (state, action) => updateAttribute(state, action)),
    on(addOption, (state, action) => addOptionOnState(state, action)),
    on(setOptionsOnEdit, (state, action) => setOptionsOnEditReducer(state, action)),
    on(deleteOption, (state, action) => deleteOptionState(state, action)),
    on(setDefaultOption, (state, action) => setDefaultOptionState(state, action)),
);

function setOptionsOnEditReducer(state, action): IAttributeStore {
  return {
    ...state,
    edit: {
      ...state.edit,
      options: action.payload
    }
  };
}

function setAttribute(state, action): IAttributeStore {
  return {
    ...state,
    list: action.payload
  };
}

function createAttribute(state, action): IAttributeStore {
  return {
    ...state,
    list: [...state.list, action.attribute]
  };
}

function removeAttribute(state, action): IAttributeStore {
  return {
    ...state,
    list: [...state.list.filter( x => x.id !== action.payload)]
  };
}

function editAttribute(state, action): IAttributeStore {
  return {
    ...state,
    edit: action.attribute
  };
}

function updateAttribute(state, action): IAttributeStore {
  return {
    ...state,
    edit: null,
    list: [
      ...state.list.map( x => {
        if (x.guid === action.attribute.guid){
          return {
            ...x,
            ...action.attribute
          };
        }
        return x;
      })
    ]
  };
}

function addOptionOnState(state, action): IAttributeStore {
  return {
    ...state,
    edit: {
      ...state.edit,
      options: [
        ...state.edit.options || [],
        action.option
      ]
    },
    list: [
      ...state.list.map( x => {
        if (x.guid === action.id){
          return {
            ...x,
            options: [
              ...x.options || [],
              action.option
            ]
          };
        }
        return x;
      })
    ]
  };
}

function deleteOptionState(state, action): IAttributeStore {
  const newEdit = {
    ...state.edit,
    options: state.edit.options.filter( x => (x && x.id) !== action.id)
  };
  return {
    ...state,
    edit: newEdit,
    list: [
      ...state.list.map( x => {
        if (x.guid === newEdit.guid){
          return newEdit;
        }
        return x;
      })
    ]
  };
}


function setDefaultOptionState(state, action): IAttributeStore {
  const newEdit = {
    ...state.edit,
    options: state.edit.options.map( x => {
      return {
        ...x,
        isDefault: x.id === action.option.id ? !x.isDeafult : false
      };
    })
  };
  return {
    ...state,
    edit: newEdit,
    list: [
      ...state.list.map( x => {
        if (x.guid === newEdit.guid){
          return newEdit;
        }
        return x;
      })
    ]
  };
}

export function attributeReducer(state, action): any{
  return reducer(state, action);
}
