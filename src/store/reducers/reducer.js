import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  oneContact: {},
  searchTerm: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
        loading: false
      };
    case actionTypes.GET_ALL_CONTACTS_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
