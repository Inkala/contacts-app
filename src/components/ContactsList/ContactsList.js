import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ContactsList.module.scss';

class ContactsList extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <section className={classes.contactsList}>
        <ul>
          {contacts
            ? contacts
                .sort((c1, c2) => c1.name.localeCompare(c2.name))
                .map(contact => (
                  <li className={classes.contactElement}>
                    <NavLink to={`/contacts/${contact.id}`}>{contact.name}</NavLink>
                  </li>
                ))
            : null}
        </ul>
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
