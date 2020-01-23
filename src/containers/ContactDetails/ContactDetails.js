import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConnectionCard from '../../components/ConnectionCard/ConnectionCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import * as actions from '../../store/actions/actions';
import classes from './ContactDetails.module.scss';

class ContactDetails extends Component {
  state = {
    displayedConnections: [], // Connections to show after filter and pagination
    filteredConnections: null, // Connections to use on pagination
    connectionsPerPage: 20, // Number of Connections per page
    totalConnections: 0, // Total amount of Connections to calculate amount of pages
    currentPage: 1
  };

  componentDidUpdate(prevProps, prevState) {
    const { contact, connections, searchTerm } = this.props;
    const { currentPage, filteredConnections } = this.state;

    if (contact !== prevProps.contact) {
      this.props.onGetConnections(this.props.contact.connections);
      this.setState({currentPage: 1}) // Reset pagination when contact changes
    }
    if (connections !== prevProps.connections) {
      this.setState({ filteredConnections: connections });
    }
    if (filteredConnections !== prevState.filteredConnections) {
      this.handlePagination(currentPage);
    }
    if (searchTerm !== prevProps.searchTerm) {
      this.handleFilterByName(searchTerm);
    }
  }

  handleFilterByName = searchTerm => {
    const filteredConnections = this.props.connections.filter(({ name }) =>
      name.toLowerCase().match(searchTerm)
    );
    this.setState({ filteredConnections, currentPage: 1 });
  };

  handlePageChange = num => {
    const newPage = this.state.currentPage + num;
    this.setState({ currentPage: newPage });
    this.handlePagination(newPage);
  };

  handlePagination = currentPage => {
    const { connectionsPerPage, filteredConnections } = this.state;
    const startConnection = (currentPage - 1) * connectionsPerPage;
    const displayedConnections = filteredConnections.slice(
      startConnection,
      startConnection + connectionsPerPage
    );
    this.setState({
      displayedConnections,
      totalConnections: filteredConnections.length
    });
  };

  render() {
    const {
      displayedConnections,
      filteredConnections,
      connectionsPerPage,
      totalConnections,
      currentPage
    } = this.state;
    const { contact } = this.props;
    let connectionsList = <p><span>Name not found</span></p>;
    if (displayedConnections && displayedConnections.length) {
      connectionsList = (
        <section className={classes.connections}>
          {displayedConnections.map(connection => (
            <button
              key={connection.id}
              onClick={() => this.props.onClickConnection(connection)}
            >
              <ConnectionCard connection={connection} />
            </button>
          ))}
        </section>
      );
    }
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
            <section className={classes.detailsWrapper}>
              <main>
                <div className={classes.description}>
                  <span>Description:</span>
                  <p>{contact.description}</p>
                </div>
                {displayedConnections && filteredConnections ? (
                  connectionsList
                ) : (
                  <p>Loading...</p>
                )}
              </main>
              <Pagination
                elementsPerPage={connectionsPerPage}
                totalElements={totalConnections}
                paginationHandler={this.handlePageChange}
                currentPage={currentPage}
                type="connections"
              />
            </section>
          </React.Fragment>
        ) : (
          <p>Please select</p>
        )}
      </section>
    );
  }
}

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
    onClickConnection: connection =>
      dispatch(actions.setCurrentContact(connection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
