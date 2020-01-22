import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './SideLetters.module.scss';

class SideLetters extends Component {
  handleClick = letter => {
    this.props.onLetterClicked(letter);
  };
  
  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <section className={classes.sideLetters}>
        {alphabet.map(l => (
          <button key={l} onClick={() => this.handleClick(l)}>
            {l}
          </button>
        ))}
      </section>
    );
  }
}

SideLetters.propTypes = {
  onLetterClicked: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    onLetterClicked: letter => dispatch(actions.setStartLetter(letter))
  };
};

export default connect(null, mapDispatchToProps)(SideLetters);
