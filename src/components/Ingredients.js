import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  ul: {
    listStyle: 'none',
    width: '90%',
    padding: '0px',
    fontSize: '.8rem',
  },
  li: {
    borderBottom: '1px solid gray',
    lineHeight: '1.5rem',
  }
}

class Ingredients extends Component {
  render() {
    return(
      <div>
        <h3>Ingredients</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>2 cups lukewarm water</li>
          <li style={styles.li}>1 tablespoon sugar</li>
          <li style={styles.li}>1 tablespoon active dry yeast or instant yeast; or 1 packet active dry yeast
</li>
          <li style={styles.li}>1 tablespoon salt</li>
          <li style={styles.li}>2 tablespoons olive oil, optional
</li>
          <li style={styles.li}>5 1/2 to 6 cups bread flour</li>
        </ul>
      </div>
    );
  }
}


export default Radium(Ingredients);
