import React from 'react';
import { connect } from 'react-redux';
import Theater from '../components/Theater'

const mapStateToProps = ({ state }) => {
  const { DATA } = state.reducer

  return {
    infoData: DATA
  }
};

export default connect(mapStateToProps)(Theater);