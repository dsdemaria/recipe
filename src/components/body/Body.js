import React from 'react';
import Radium from 'radium';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import AtAGlance from './AtAGlance';

const styles = {
  article: {
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
    fontSize: '1.25rem',
    lineHeight: '2.25rem',
    margin: '0 auto',
  },
  h1: {
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

const Body = (props) => (
  <article style={styles.article}>
    <h1 style={styles.h1}>&#127829; Pizza! &#127829;</h1>
    <div style={styles.row}>
      <LeftColumn>
        <Ingredients />
      </LeftColumn>
      <RightColumn>
        <AtAGlance />
      </RightColumn>
    </div>
    <div style={styles.row}>
      <Instructions />
    </div>
  </article>
)

export default Radium(Body);
