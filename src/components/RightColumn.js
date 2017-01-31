import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: '24%'
  }
}

const RightColumn = (props) => (
  <div style={styles.base}>{props.children}</div>
)

export default Radium(RightColumn)
