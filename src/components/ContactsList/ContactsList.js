import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ContactsList.module.scss';

class ContactsList extends Component {
  state = {
    displayedContacts: null
  };

  componentDidMount() {
    this.props.onGetContacts();
  }

  componentDidUpdate(prevProps) {
    const { contacts, searchTerm } = this.props;

    if (contacts !== prevProps.contacts) {
      this.setState({ displayedContacts: contacts });
    }

    if (searchTerm !== prevProps.searchTerm) {
      this.handleContactsFilter(searchTerm);
    }
  }

  handleContactsFilter = searchTerm => {
    const filteredContacts = this.props.contacts.filter(({ name }) =>
      name.toLowerCase().match(searchTerm)
    );
    this.setState({ displayedContacts: filteredContacts });
  };

  render() {
    const { displayedContacts } = this.state;
    let contactsList = <p>Loading...</p>;
    if (displayedContacts) {
      if (displayedContacts.length) {
        contactsList = (
          <ul>
            {displayedContacts
              .sort((c1, c2) => c1.name.localeCompare(c2.name))
              .map(contact => (
                <li className={classes.contactElement} key={contact.id}>
                  <NavLink to={`/contacts/${contact.id}`}>{contact.name}</NavLink>
                </li>
              ))}
          </ul>
        );
      } else {
        contactsList = <p>Name not found</p>
      }
    }

    return (
      <section className={classes.contactsList}>
        {contactsList}
      </section>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  loading: PropTypes.bool,
  searchTerm: PropTypes.string,
  onGetContacts: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    loading: state.loading,
    searchTerm: state.searchTerm,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetContacts: () => dispatch(actions.getAllContacts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
