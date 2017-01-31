import React from 'react';
import Radium from 'radium';

const styles = {
  ul: {
    listStyle: 'none',
    padding: '0px',
    fontSize: '.8rem',
  },
  li: {
    borderBottom: '1px solid gray',
    lineHeight: '1.5rem',
    paddingLeft: '1rem',
    first: {
      borderBottom: '1px solid gray',
      borderTop : '1px solid gray',
      lineHeight: '1.5rem',
      paddingLeft: '1rem',
    }
  }
}

const Ingredients = () => (
  <div>
    <h3>Ingredients</h3>
    <ul style={styles.ul}>
      <li style={styles.li.first}>1 cup lukewarm water</li>
      <li style={styles.li}>1/2 tablespoon sugar</li>
      <li style={styles.li}>2 1/4 teaspoons active dry yeast or instant yeast; or 1 packet active dry yeast.</li>
      <li style={styles.li}>1 1/2 teasponns salt</li>
      <li style={styles.li}>2 tablespoons olive oil, optional</li>
      <li style={styles.li}>2 1/2 - 3 cups bread flour</li>
    </ul>
  </div>
)


export default Radium(Ingredients);
