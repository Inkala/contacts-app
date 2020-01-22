import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { contacts, searchTerm, startLetter } = this.props;

    if (startLetter !== prevProps.startLetter) {
      this.handleFilterByLetter(startLetter);
    }
    if (contacts !== prevProps.contacts) {
      this.setState({ displayedContacts: contacts });
    }
    if (searchTerm !== prevProps.searchTerm) {
      this.handleFilterByName(searchTerm);
    }
  }

  handleFilterByName = searchTerm => {
    const filteredContacts = this.props.contacts.filter(({ name }) =>
      name.toLowerCase().match(searchTerm)
    );
    this.setState({ displayedContacts: filteredContacts });
  };

  handleFilterByLetter = startLetter => {
    const filteredContacts = this.props.contacts.filter(({ name }) => {
      name = name.trim().toUpperCase();
      return name[0] === startLetter;
    });
    this.setState({ displayedContacts: filteredContacts });
  };

  handleNameClick = contact => {
    this.props.onClickContact(contact);
  };

  render() {
    const { displayedContacts } = this.state;
    let contactsList = <p>Loading...</p>;
    if (displayedContacts) {
      if (displayedContacts.length) {
        contactsList = (
          <ul>
            {displayedContacts
              .map(contact => (
                <li className={classes.contactElement} key={contact.id}>
                  <button onClick={() => this.handleNameClick(contact)}>
                    {contact.name}
                  </button>
                </li>
              ))}
          </ul>
        );
      } else {
        contactsList = <p>Name not found</p>;
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
  startLetter: PropTypes.string,
  onGetContacts: PropTypes.func,
  onClickContact: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    loading: state.loading,
    searchTerm: state.searchTerm,
    startLetter: state.startLetter,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetContacts: () => dispatch(actions.getAllContacts()),
    onClickContact: contact => dispatch(actions.setCurrentContact(contact))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
