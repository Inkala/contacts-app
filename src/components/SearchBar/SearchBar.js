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
    const searchClasses = [classes.searchBar];
    if (this.props.type === 'contacts') {
      searchClasses.push(classes.contacts);
    }
    if (this.props.type === 'connections') {
      searchClasses.push(classes.connections);
    }
    return (
      <section className={searchClasses.join(' ')}>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          value={this.state.inputSearch}
          onChange={this.handleFilter}
          placeholder="Search by name..."
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchContact: searchTerm => dispatch(actions.setContactSearchTerm(searchTerm)),
    onSearchConnection: searchTerm => dispatch(actions.setConnectionSearchTerm(searchTerm))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
