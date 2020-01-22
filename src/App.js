import React from 'react';
// import { Route } from 'react-router-dom';

import ContactsList from './components/ContactsList/ContactsList';
import ContactDetails from './components/ContactDetails/ContactDetails';
import SearchBar from './components/SearchBar/SearchBar';
import SideLetters from './components/SideLetters/SideLetters';
import classes from './App.module.scss';

// TODO:
// Loading
// Create error message
// Clean comments
// Clean console logs

function App() {
  return (
    <main className={classes.App}>
      <section className={classes.contactsSection}>
        <SearchBar type="contacts"/>
        <section className={classes.contactsList}>
          <SideLetters />
          <ContactsList />
        </section>
      </section>
      <ContactDetails />
    </main>
  );
}

export default App;
