import React from 'react';

import ContactDetails from './containers/ContactDetails/ContactDetails';
import classes from './App.module.scss';
import LeftNavigation from './containers/LeftNavigation/LeftNavigation';

/*
TODO:
  Loading
  Create error message
  Clean comments
  Clean console logs
  Code splitting
  App name
  testing
*/

function App() {
  return (
    <main className={classes.App}>
      <LeftNavigation />
      <ContactDetails />
    </main>
  );
}

export default App;
