import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './SideLetters.module.scss';

class SideLetters extends Component {
  state = {
    activeLetter: ''
  };

  handleClick = letter => {
    this.props.onLetterClicked(letter);
  };

  componentDidUpdate(prevProps) {
    if (this.props.startLetter !== prevProps.startLetter) {
      this.setState({ activeLetter: this.props.startLetter });
    }
  }

  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <section className={classes.sideLetters}>
        <div>
          {alphabet.map(l => {
            const activeClass =
              l === this.state.activeLetter ? classes.active : null;
            return (
              <button
                key={l}
                className={activeClass}
                onClick={() => this.handleClick(l)}
              >
                {l}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
}

SideLetters.propTypes = {
  startLetter: PropTypes.string,
  onLetterClicked: PropTypes.func
};

const mapStateToProps = state => {
  return {
    startLetter: state.startLetter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLetterClicked: letter => dispatch(actions.setStartLetter(letter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideLetters);
