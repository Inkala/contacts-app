import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Pagination from '../Pagination/Pagination';
import * as actions from '../../store/actions/actions';
import classes from './ContactsList.module.scss';
import ContactListElement from './ContactListElement/ContactListElement';

export class ContactsList extends Component {
  state = {
    displayedContacts: [], // Contacts to show after filter and pagination
    filteredContacts: null, // Contacts to use on pagination
    contactsPerPage: 50, // Number of Contacts per page
    totalContacts: 0, // Total amount of Contacts to calculate amount of pages
    currentPage: 1
  };

  componentDidMount() {
    this.props.onGetContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts, searchTerm, startLetter } = this.props;
    const { currentPage, filteredContacts } = this.state;

    if (contacts !== prevProps.contacts) {
      this.setState({ filteredContacts: contacts });
    }
    if (filteredContacts !== prevState.filteredContacts) {
      this.handlePagination(currentPage);
    }
    if (startLetter !== prevProps.startLetter) {
      this.handleFilterByLetter(startLetter);
    }
    if (searchTerm !== prevProps.searchTerm) {
      this.handleFilterByName(searchTerm);
    }
  }

  handleFilterByName = searchTerm => {
    this.handleFilterByLetter('');
    const filteredContacts = this.props.contacts.filter(({ name }) =>
      name.toLowerCase().match(searchTerm)
    );
    this.setState({ filteredContacts, currentPage: 1 });
  };

  handleFilterByLetter = startLetter => {
    const filteredContacts = this.props.contacts.filter(({ name }) => {
      name = name.trim().toUpperCase();
      return name[0] === startLetter;
    });
    this.setState({ filteredContacts, currentPage: 1 });
  };

  handleNameClick = contact => {
    this.props.onClickContact(contact);
    this.props.onToggleDetails();
  };

  handlePageChange = num => {
    const newPage = this.state.currentPage + num;
    this.setState({ currentPage: newPage });
    this.handlePagination(newPage);
  };

  handlePagination = currentPage => {
    const { contactsPerPage, filteredContacts } = this.state;
    const startContact = (currentPage - 1) * contactsPerPage;
    const displayedContacts = filteredContacts.slice(
      startContact,
      startContact + contactsPerPage
    );
    this.setState({
      displayedContacts,
      totalContacts: filteredContacts.length
    });
  };

  render() {
    const {
      displayedContacts,
      contactsPerPage,
      totalContacts,
      currentPage
    } = this.state;
    const { currentContact, loading } = this.props;

    let contactsList = <p>Name not found</p>;
    if (displayedContacts && displayedContacts.length) {
      contactsList = (
        <ul>
          {displayedContacts.map(contact => (
            <ContactListElement
              key={contact.id}
              contact={contact}
              currentName={currentContact.name}
              handleNameClick={this.handleNameClick}
            />
          ))}
        </ul>
      );
    }

    return (
      <section className={classes.contactsList}>
        {loading ? <p>Loading...</p> : contactsList}
        <Pagination
          elementsPerPage={contactsPerPage}
          totalElements={totalContacts}
          paginationHandler={this.handlePageChange}
          currentPage={currentPage}
          type="contacts"
        />
      </section>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  currentContact: PropTypes.object,
  loading: PropTypes.bool,
  searchTerm: PropTypes.string,
  startLetter: PropTypes.string,
  onGetContacts: PropTypes.func,
  onClickContact: PropTypes.func,
  onToggleDetails: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    currentContact: state.currentContact,
    loading: state.loading,
    searchTerm: state.contactSearchTerm,
    startLetter: state.startLetter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetContacts: () => dispatch(actions.getAllContacts()),
    onClickContact: contact => dispatch(actions.setCurrentContact(contact)),
    onToggleDetails: () => dispatch(actions.toggleDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
