import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ContactsList.module.scss';
import Pagination from '../Pagination/Pagination';

class ContactsList extends Component {
  state = {
    displayedContacts: [], // Contacts to show after filter and pagination
    filteredContacts: null, // Contacts to use on pagination
    contactsPerPage: 30, // Number of Contacts per page
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
    console.log('contactsPerPage', contactsPerPage);
    console.log('startContact', startContact);
    console.log('displayedContacts', displayedContacts);

    this.setState({
      displayedContacts,
      totalContacts: filteredContacts.length
    });
  };

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
  };

  render() {
    const {
      displayedContacts,
      filteredContacts,
      contactsPerPage,
      currentPage
    } = this.state;

    const { currentContact } = this.props;
    let contactsList = <p>Name not found</p>;
    if (displayedContacts && displayedContacts.length) {
      contactsList = (
        <ul>
          {displayedContacts.map(contact => {
            const activeClass =
              currentContact.name === contact.name ? classes.active : null;
            return (
              <li className={classes.contactElement} key={contact.id}>
                <button
                  className={activeClass}
                  onClick={() => this.handleNameClick(contact)}
                >
                  {contact.name}
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <section className={classes.contactsList}>
        {displayedContacts && filteredContacts ? (
          contactsList
        ) : (
          <p>Loading...</p>
        )}
        <Pagination
          contactsPerPage={contactsPerPage}
          totalContacts={this.state.totalContacts}
          paginationHandler={this.handlePageChange}
          currentPage={currentPage}
        />
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
    currentContact: state.currentContact,
    loading: state.loading,
    searchTerm: state.contactSearchTerm,
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
