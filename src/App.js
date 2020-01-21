import React from 'react';
import { Route } from 'react-router-dom';

import ContactsList from './components/ContactsList/ContactsList';
import ContactDetails from './components/ContactDetails/ContactDetails';
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <section className={classes.contactsSection}>
        <p>Search Bar</p>
        <ContactsList />
      </section>
      <section className={classes.displaySection}>
        <p>Nav Element</p>
        <ContactDetails />
        <Route path="/contact/:id" exact component={ContactDetails} />
      </section>
    </main>
  );
}

export default App;
