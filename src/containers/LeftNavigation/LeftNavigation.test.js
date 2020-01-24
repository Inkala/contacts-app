import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import LeftNavigation from './LeftNavigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideLetters from '../../components/SideLetters/SideLetters';
import ContactsList from '../../components/ContactsList/ContactsList';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LeftNavigation />);
});

describe('<LeftNavigation />', () => {
  it('should render an SearchBar', () => {
    expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
  });
  it('should render an SearchBar for the contacts', () => {
    expect(wrapper.find(SearchBar).props().type).to.equal('contacts');
  });
  it('should render the SideLetters component', () => {
    expect(wrapper.find(SideLetters)).to.have.lengthOf(1);
  });
  it('should render the ContactsList', () => {
    expect(wrapper.find(ContactsList)).to.have.lengthOf(1);
  });
});

