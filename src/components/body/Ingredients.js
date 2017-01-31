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

const ingredients = [
  {
    step: '1 cup lukewarm water (90 deg F.)',
  },
  {
    step: '1/2 tablespoon sugar',
  },
  {
    step: '2 1/4 teaspoons active dry yeast or instant yeast; or 1 packet active dry yeast.',
  },
  {
    step: '1 1/2 teasponns salt',
  },
  {
    step: '2 tablespoons olive oil, optional',
  },
  {
    step: '2 1/2 - 3 cups bread flour',
  },
]

const ingredientsList = ingredients.map((direction, idx) => {
  if(!idx) {
    return <li key={idx} style={styles.li.first}>{direction.step}</li>
  } else {
    return <li key={idx} style={styles.li}>{direction.step}</li>
  }
});

const Ingredients = () => (
  <div>
    <h3>Ingredients</h3>
    <ul style={styles.ul}>
      {ingredientsList}
    </ul>
  </div>
)

export default Radium(Ingredients);
