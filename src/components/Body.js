import React, { Component } from 'react';
import Radium from 'radium';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import AtAGlance from './AtAGlance';

const articleStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '800px',
  fontSize: '1.25rem',
  lineHeight: '2.25rem',
  margin: '20px auto',
}
const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}


export default class Body extends Component {
  render() {
    return (
      <article style={articleStyle}>
        <div style={rowStyle}>
          <LeftColumn>
            <Ingredients />
          </LeftColumn>
          <RightColumn>
            <AtAGlance />
          </RightColumn>
        </div>
        <div style={rowStyle}>
          <Instructions />
        </div>
      </article>
    );
  }
}
