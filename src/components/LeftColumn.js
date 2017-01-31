import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: '74%'
  }
}

const LeftColumn = (props) => (
  <div style={styles.base}>{props.children}</div>
)

export default Radium(LeftColumn)
