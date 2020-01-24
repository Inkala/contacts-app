import reducer from './reducer';
import { expect } from 'chai';

import * as actionTypes from '../actions/actionTypes';
import contacts from '../../helpers/mockContacts';

const oneContact = {
  name: 'Wilber Zulauf',
  description:
    'Eos totam sit. Et enim perspiciatis repudiandae. Atque omnis beatae blanditiis ut laudantium omnis vel fugit. Et totam voluptates. Illo ea et et mollitia ipsa. Placeat dolorum nihil illum voluptas nihil tenetur minus tenetur deserunt.',
  id: 0,
  connections: [
    376,
    321,
    411,
    23,
    100,
    400,
    487,
    213,
    877,
    135,
    370,
    936,
    120,
    609,
    337,
    754,
    886,
    161,
    396,
    853,
    464,
    393,
    262,
    617,
    904,
    940,
    96,
    512,
    928,
    672,
    242,
    70,
    75,
    84,
    94,
    98,
    172,
    237,
    353,
    368,
    394,
    427,
    429,
    443,
    470,
    489,
    493,
    589,
    662,
    664,
    674,
    757,
    768,
    770,
    925,
    987
  ],
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg'
};

describe('Reducer', () => {
  // Check the reducer is connected
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      contacts: [],
      contactSearchTerm: '',
      connectionSearchTerm: '',
      startLetter: '',
      currentContact: null,
      detailsShowing: false
    });
  });
});
