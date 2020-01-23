import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  contactSearchTerm: '',
  connectionSearchTerm: '',
  startLetter: '',
  currentContact: null,
  detailsShowing: false
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
    case actionTypes.SET_CONTACT_SEARCH_TERM:
      return {
        ...state,
        contactSearchTerm: action.contactSearchTerm,
        connectionSearchTerm: action.connectionSearchTerm,
        startLetter: action.startLetter
      };
    case actionTypes.SET_CONNECTION_SEARCH_TERM:
      return {
        ...state,
        contactSearchTerm: action.contactSearchTerm,
        connectionSearchTerm: action.connectionSearchTerm
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
    case actionTypes.TOGGLE_DETAILS:
      return {
        ...state,
        detailsShowing: !state.detailsShowing
      };
    default:
      return state;
  }
};

export default reducer;
