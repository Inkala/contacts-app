import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  searchTerm: null,
  startLetter: null,
  currentContact: null
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
        currentContact: action.currentContact,
        loading: false
      };
    case actionTypes.GET_ALL_CONTACTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case actionTypes.SET_START_LETTER:
      return {
        ...state,
        startLetter: action.startLetter
      };
    case actionTypes.SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.currentContact
      };
    case actionTypes.GET_CONNECTIONS:
      const connections = state.contacts.filter(contact =>
        action.connectionsArr.includes(contact.id)
      );
      return {
        ...state,
        contactConnections: connections
      };
    default:
      return state;
  }
};

export default reducer;
