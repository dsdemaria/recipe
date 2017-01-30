import React, { Component } from 'react';
import Radium from 'radium';
import Timer from './Timer';

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
        <Timer title={'Proof Yeast'} seconds={1500} />
        <Timer title={'Knead Dough'} seconds={60*15} />
        <Timer title={'Let Rise'} seconds={60*30} />
        <Timer title={'Bake!'} seconds={60*18} />
        <Timer title={'Let it Set'} seconds={60*5} />
      </div>
    );
  }
}
