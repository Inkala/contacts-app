import React from 'react';
import { Route } from 'react-router-dom';

import classes from './App.module.scss';
import ContactsList from './components/ContactsList/ContactsList';
import ContactDetails from './components/ContactDetails/ContactDetails';

function App() {
  return (
    <main className="App">
      <section className={classes.contactsSection}>
        <ContactsList />
        <p>contacts List</p>
      </section>
      <section className={classes.displaySection}>
        <p>Search Bar</p>
        <ContactDetails />
        <Route path="/contact/:id" exact component={ContactDetails} />
      </section>
    </main>
  );
}

export default App;
