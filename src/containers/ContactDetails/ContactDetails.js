import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ContactDetails.module.scss';
import ConnectionCard from '../../components/ConnectionCard/ConnectionCard';
import SearchBar from '../../components/SearchBar/SearchBar';

class ContactDetails extends Component {
  state = {
    displayedConnections: null
  };

  componentDidUpdate(prevProps) {
    const { contact, connections, searchTerm } = this.props;

    if (contact !== prevProps.contact) {
      this.props.onGetConnections(this.props.contact.connections);
    }
    if (connections !== prevProps.connections) {
    this.setState({ displayedConnections: connections });
    }

    if (searchTerm !== prevProps.searchTerm) {
      this.handleFilterByName(searchTerm);
    }
  }

  handleFilterByName = searchTerm => {
    const filteredContacts = this.props.connections.filter(({ name }) =>
      name.toLowerCase().match(searchTerm)
    );
    this.setState({ displayedConnections: filteredContacts });
  };

  render() {
    const { contact } = this.props;
    const { displayedConnections } = this.state;
    let avatar = { backgroundImage: 'url(img/user_avatar.png)' };
    if (contact && contact.avatar) {
      avatar = { backgroundImage: `url(${contact.avatar})` };
    }
    return (
      <section className={classes.contactDetails}>
        {contact ? (
          <React.Fragment>
            <header>
              <div className={classes.avatar} style={avatar}></div>
              <h1>{contact.name}</h1>
              <SearchBar type="connections" />
            </header>
            <main>
              <div className={classes.description}>
                <span>Description:</span>
                <p>{contact.description}</p>
              </div>
              <section className={classes.connections}>
                {displayedConnections
                  ? displayedConnections.map(connection => (
                      <button
                        key={connection.id}
                        onClick={() => this.props.onClickConection(connection)}
                      >
                        <ConnectionCard connection={connection} />
                      </button>
                    ))
                  : null}
              </section>
            </main>
          </React.Fragment>
        ) : (
          <p>Please select</p>
        )}
      </section>
    );
  }
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array,
//   loading: PropTypes.bool,
//   searchTerm: PropTypes.string,
//   startLetter: PropTypes.string,
//   onGetContacts: PropTypes.func,
//   onClickContact: PropTypes.func
// };

const mapStateToProps = state => {
  return {
    contact: state.currentContact,
    connections: state.contactConnections,
    searchTerm: state.connectionSearchTerm,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetConnections: connectionsArr =>
      dispatch(actions.getConnections(connectionsArr)),
    onClickConection: connection =>
      dispatch(actions.setCurrentContact(connection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
