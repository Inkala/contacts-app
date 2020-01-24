import { expect } from 'chai';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import contacts from '../../helpers/mockContacts';

const searchTerm = 'Test input';

describe('Actions', () => {

  it('Get all Contacts', () => {
    const getContactsAction = {
      type: actionTypes.GET_ALL_CONTACTS_SUCCESS,
      contacts,
      currentContact: contacts[0]
    };
    expect(actions.getAllContactsSuccess(contacts)).to.eql(getContactsAction);
  });
  
  it('should set contact serchTerm from serchBar input', () => {
    const searchAction = {
      type: actionTypes.SET_CONTACT_SEARCH_TERM,
      connectionSearchTerm: '',
      contactSearchTerm: searchTerm,
      startLetter: ''
    };
    expect(actions.setContactSearchTerm(searchTerm)).to.eql(searchAction);
  });

  it('should set connection serchTerm from serchBar input', () => {
    const searchAction = {
      type: actionTypes.SET_CONNECTION_SEARCH_TERM,
      connectionSearchTerm: searchTerm,
      contactSearchTerm: ''
    };
    expect(actions.setConnectionSearchTerm(searchTerm)).to.eql(searchAction);
  });

  it('should set filtered letter buttons', () => {
    const searchLetter = "A"
    const searchAction = {
      type: actionTypes.SET_START_LETTER,
      startLetter: searchLetter
    };
    expect(actions.setStartLetter(searchLetter)).to.eql(searchAction);
  });

  it('should get the connections from one contact', () => {
    const connectionsArr = contacts[0].connections;
    const connectionsAction = {
      type: actionTypes.GET_CONNECTIONS,
      connectionsArr: contacts[0].connections
    };
    expect(actions.getConnections(connectionsArr)).to.eql(connectionsAction);
  });
});
