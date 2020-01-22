import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ContactDetails.module.scss';
import ConnectionCard from './ConnectionCard/ConnectionCard';

class ContactDetails extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.contact !== this.props.contact) {
      this.props.onGetConnections(this.props.contact.connections);
    }
  }

  render() {
    const { contact, connections } = this.props;
    const avatar = contact
      ? { backgroundImage: `url(${contact.avatar})` }
      : null;
    return (
      <section className={classes.contactDetails}>
        {contact ? (
          <React.Fragment>
            <header>
              <div className={classes.avatar} style={avatar}></div>
              <h1>{contact.name}</h1>
              <div className={classes.search}>Search bar</div>
            </header>
            <main>
              <span>Description:</span>
              <p>{contact.description}</p>
              <section className={classes.connections}>
                {connections
                  ? connections.map(connection => (
                      <ConnectionCard key={connection.id} connection={connection} />
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
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetConnections: connectionsArr =>
      dispatch(actions.getConnections(connectionsArr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
