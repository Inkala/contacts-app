import React from 'react';
// import { Route } from 'react-router-dom';

import ContactsList from './components/ContactsList/ContactsList';
import ContactDetails from './components/ContactDetails/ContactDetails';
import SearchBar from './components/SearchBar/SearchBar';
import SideLetters from './components/SideLetters/SideLetters';
import classes from './App.module.scss';

// TODO:
// Clean comments
// Clean console logs
// Create error message

function App() {
  return (
    <main className={classes.App}>
      <section className={classes.contactsSection}>
        <SearchBar />
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
