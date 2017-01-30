import React from 'react';
import Radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '.25rem',
    lineHeight: '1.5rem',
  },
  step: {
    textTransform: 'uppercase',
  },
  time: {
    margin: '0',
  }
}

const Description = ({ step, time }) => (
  <dl style={styles.wrapper}>
    <dt style={styles.step}>{step}</dt>
    <dd style={styles.time}>{time}</dd>
  </dl>
)

export default Radium(Description);
