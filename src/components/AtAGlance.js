import React, { Component } from 'react';
import Radium from 'radium';
import Description from './Description';

const styles = {
  title: {
    background: 'black',
    color: 'white',
    display: 'block',
    margin: '0px',
    padding: '6px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  wrapper: {
    border: '2px solid black',
  }
}

export default class AtAGlance extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <p style={styles.title}>At a glance</p>
        <Description step={`prep`} time={`20 min`} />
        <Description step={`bake`} time={`15-20 min`} />
        <Description step={`total`} time={`30 min`} />
      </div>
    );
  }
}
