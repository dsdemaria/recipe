import React from 'react';
import Radium from 'radium';
import Description from './Description';

const styles = {
  title: {
    background: 'black',
    color: 'white',
    display: 'block',
    margin: '0px',
    padding: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  wrapper: {
    border: '2px solid black',
    paddingBottom: '1rem',
  }
}

const AtAGlance = () => (
  <div style={styles.wrapper}>
    <p style={styles.title}>At a glance</p>
    <Description step={`prep`} time={`25 min`} />
    <Description step={`bake`} time={`15-20 min`} />
    <Description step={`total`} time={`30 min`} />
  </div>
)


export default Radium(AtAGlance);
