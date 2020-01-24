import React from 'react';
import { connect } from 'react-redux';

import ContactDetails from './containers/ContactDetails/ContactDetails';
import classes from './App.module.scss';
import LeftNavigation from './containers/LeftNavigation/LeftNavigation';
import NetworkError from './components/NetworkError/NetworkError';

const App = ({ error }) => {
  return error ? (
    <NetworkError />
  ) : (
    <main className={classes.App}>
      <LeftNavigation />
      <ContactDetails />
    </main>
  );
};

const mapStateToProps = state => ({ error: state.error });

export default connect(mapStateToProps)(App);
