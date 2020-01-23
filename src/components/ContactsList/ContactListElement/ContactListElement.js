import React from 'react';

import classes from './ContactListElement.module.scss';

const ContactListElement = ({contact, currentName, handleNameClick}) => {
  const activeClass =
    currentName === contact.name ? classes.active : null;
  return (
    <li className={classes.contactListElement}>
      <button
        className={activeClass}
        onClick={() => handleNameClick(contact)}
      >
        {contact.name}
      </button>
    </li>
  );
};

export default ContactListElement;
