import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  oneContact: {},
  searchTerm: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
