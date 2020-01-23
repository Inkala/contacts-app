import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/actions';
import classes from './SearchBar.module.scss';

class SearchBar extends Component {
  state = {
    inputSearch: ''
  };

  handleFilter = event => {
    const { type } = this.props;
    this.setState({ inputSearch: event.target.value });
    if (type === 'contacts') {
      this.props.onSearchContact(event.target.value.toLowerCase());
    } else {
      this.props.onSearchConnection(event.target.value.toLowerCase());
    }
  };

  render() {
    const { type, contactSearchTerm, connectionSearchTerm } = this.props;
    const searchClasses = [classes.searchBar];

    if (type === 'contacts') {
      searchClasses.push(classes.contacts);
    }
    if (type === 'connections') {
      searchClasses.push(classes.connections);
    }
    return (
      <section className={searchClasses.join(' ')}>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          value={type === 'contacts' ? contactSearchTerm : connectionSearchTerm}
          onChange={this.handleFilter}
          placeholder="Search by name..."
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  type: PropTypes.string,
  contactSearchTerm: PropTypes.string,
  connectionSearchTerm: PropTypes.string,
  onSearchContact: PropTypes.func,
  onSearchConnection: PropTypes.func
};

const mapStateToProps = state => {
  return {
    contactSearchTerm: state.contactSearchTerm,
    connectionSearchTerm: state.connectionSearchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchContact: searchTerm =>
      dispatch(actions.setContactSearchTerm(searchTerm)),
    onSearchConnection: searchTerm =>
      dispatch(actions.setConnectionSearchTerm(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
