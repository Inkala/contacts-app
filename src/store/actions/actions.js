import axios from '../../helpers/contactsService';
import * as actionTypes from './actionTypes';

export const getAllContactsSuccess = contacts => {
  return {
    type: actionTypes.GET_ALL_CONTACTS_SUCCESS,
    contacts,
    currentContact: contacts[0]
  };
};

export const getAllContactsFail = error => {
  return {
    type: actionTypes.GET_ALL_CONTACTS_FAIL,
    error
  };
};

export const getAllContactsStart = () => {
  return {
    type: actionTypes.GET_ALL_CONTACTS_START
  };
};

export const getAllContacts = () => {
  return dispatch => {
    dispatch(getAllContactsStart());
    return axios
      .get('/contacts.json')
      .then(res => {
        const contacts = res.data.sort((c1, c2) =>
          c1.name.localeCompare(c2.name)
        );
        dispatch(getAllContactsSuccess(contacts));
      })
      .catch(err => {
        dispatch(getAllContactsFail(err));
      });
  };
};

export const setContactSearchTerm = searchTerm => {
  return {
    type: actionTypes.SET_CONTACT_SEARCH_TERM,
    contactSearchTerm: searchTerm,
    connectionSearchTerm: '', // Reset connections search bar
    startLetter: '' // Reset active letter
  };
};

export const setConnectionSearchTerm = searchTerm => {
  return {
    type: actionTypes.SET_CONNECTION_SEARCH_TERM,
    connectionSearchTerm: searchTerm,
    contactSearchTerm: '' // Reset contacts search bar
  };
};

export const setStartLetter = letter => {
  return {
    type: actionTypes.SET_START_LETTER,
    startLetter: letter
  };
};

export const setCurrentContact = contact => {
  return {
    type: actionTypes.SET_CURRENT_CONTACT,
    currentContact: contact
  };
};

export const getConnections = connectionsArr => {
  return {
    type: actionTypes.GET_CONNECTIONS,
    connectionsArr: connectionsArr
  };
};
