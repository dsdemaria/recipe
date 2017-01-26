import React, { Component } from 'react';
import Timer from './Timer';

export default class AtAGlance extends Component {
  render() {
    return (
      <div>
        <h3>At a glance</h3>
        <Timer seconds={1500} />
      </div>
    );
  }
}
