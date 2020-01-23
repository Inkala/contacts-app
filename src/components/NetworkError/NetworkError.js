import React from 'react';

import classes from './NetworkError.module.scss';

const NetworkError = () => {
  return <section className={classes.networkError}>
    <div className={classes.module}>
      <p>There was a Network error. Please try again later.</p>
    </div>
  </section>;
};

export default NetworkError;
