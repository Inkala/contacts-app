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
  }
  
  handleFilter = event => {
    this.setState({ inputSearch: event.target.value });
    this.props.onSearchChange(event.target.value.toLowerCase());
  };
  
  render() {
    const searchClasses = [classes.searchBar]
    if (this.props.type === 'contacts') {
      searchClasses.push(classes.contacts);
    }
    if (this.props.type === 'connections') {
      searchClasses.push(classes.connections);
    }
    console.log(searchClasses)
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
    onSearchChange: searchTerm => dispatch(actions.setSearchTerm(searchTerm))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
