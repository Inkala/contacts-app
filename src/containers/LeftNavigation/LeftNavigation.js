import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import SideLetters from '../../components/SideLetters/SideLetters';
import ContactsList from '../../components/ContactsList/ContactsList';
import classes from './LeftNavigation.module.scss';

const LeftNavigation = () => {
  return (
    <section className={classes.leftNavigation}>
      <SearchBar type="contacts" />
      <section className={classes.contacts}>
        <SideLetters />
        <ContactsList />
      </section>
    </section>
  );
};

export default LeftNavigation;
