import React from 'react';
import PropTypes from 'prop-types';

import classes from './ConnectionCard.module.scss';

const ConnectionCard = ({ connection }) => {
  const avatar = connection
    ? { backgroundImage: `url(${connection.avatar})` }
    : null;
  return (
    <article className={classes.connectionCard}>
      <div className={classes.avatar} style={avatar}></div>
      <p>{connection.name}</p>
    </article>
  );
};

ConnectionCard.propTypes = {
  connection: PropTypes.object
};

export default ConnectionCard;
