import React, { Component } from 'react';
import Timer from './Timer';

const wrapper = {
  width: '30%',
  border: '2px solid black',
}
const titleStyle = {
  background: 'black',
  color: 'white',
  display: 'block',
  margin: '0px',
  padding: '6px',
  textAlign: 'center',
  fontWeight: 'bold',
  textTransform: 'uppercase',
}

export default class AtAGlance extends Component {
  render() {
    return (
      <div style={wrapper}>
        <p style={titleStyle}>At a glance</p>
        <Timer title={'Test'} seconds={3} />
        <Timer title={'Proof Yeast'} seconds={1500} />
        <Timer title={'Knead Dough'} seconds={60*15} />
        <Timer title={'Let Rise'} seconds={60*30} />
        <Timer title={'Bake!'} seconds={60*18} />
        <Timer title={'Let it Set'} seconds={1500} />
      </div>
    );
  }
}
