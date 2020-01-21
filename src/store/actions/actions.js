import axios from '../../helpers/contactsService';
import * as actionTypes from './actionTypes';

export const getAllContactsSuccess = contacts => {
  return {
    type: actionTypes.GET_ALL_CONTACTS_SUCCESS,
    contacts
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
        dispatch(getAllContactsSuccess(res.data));
      })
      .catch(err => {
        // dispatch(getAllContactsFail(err));
      });
  };
};
