import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: '33%'
  }
}

const RightColumn = (props) => (
  <div style={styles.base}>{props.children}</div>
)

export default Radium(RightColumn)
