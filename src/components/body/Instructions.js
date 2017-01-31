import React from 'react';
import Radium from 'radium';
import Timer from './Timer';

const styles = {
  h3: {
    textAlign: 'center',
  },
  ol: {
    fontSize: '1rem',
    padding: '0',
  },
  li: {
    display: 'flex',
    borderLeft: '1px solid black',
    padding: '0 0 1rem 1rem',
    marginBottom: '2rem',
  }
}

const Instructions = (props) => (
  <div>
    <h3 style={styles.h3}>Instructions</h3>
    <ol style={styles.ol}>
      <li style={styles.li}>
        Dissolve the sugar, 1 tbsp of bread flour, and yeast in the lukewarm water (about 90 degrees F.). Proof for 25 minutes.
        <Timer title="Proof Dough" seconds={1500} />
      </li>
      <li style={styles.li}>Add the flour, starting with 2  cups flour and adding more as necessary to make a soft, smooth dough.</li>
      <li style={styles.li}>
        Knead the dough (with your hands, a mixer, or your bread machine set on the dough cycle) until it is smooth and elastic, about 10 minutes.
        <Timer title="Knead" seconds={600} />
      </li>
      <li style={styles.li}>
        Place the dough in a lightly greased bowl or other container, cover it, and let it rise for 1 to 2 hours.
        <Timer title="Let Rise" seconds={3600} />
      </li>

      <li style={styles.li}>Gently deflate the dough, and divide it into two pieces, for medium-crust pizza; or one for thicker crusts. Roll each piece, on a floured surface, with a floured rolling pin, into a circle to fit a 12 inch pizza pan. To roll, work from the center to the outside like pie dough. Let the dough rest several times to relax it and make it more cooperative. Turn it over from time to time and roll the reverse side.</li>
      <li style={styles.li}>Place the rounds on pizza pans; on baking sheets; or, if you have a pizza stone in your oven, on parchment.</li>
      <li style={styles.li}>Preheat your oven to 450°F. While it's heating, get out your toppings, which you've prepared ahead. Some possibilities include sliced pepperoni; sautéed mushroooms, onions, or peppers; cooked meats; olives; and grated or shredded cheese.</li>
      <li style={styles.li}>Brush each crust with a bit of olive oil; spread pizza or spaghetti sauce lightly over the surface, and let your guests add their favorite toppings. Sprinkle the top with grated cheese.</li>
      <li style={styles.li}>
        Bake the pizzas for 15 to 20 minutes, until they are golden brown, the toppings are hot and bubbly, and the cheese is melted. Remove the pizzas from the oven.
        <Timer title="Bake" seconds={900} />
      </li>

      <li style={styles.li}>
        Immediately transfer pizzas to a cooling rack, so their bottoms do not get soggy. After about 10 minutes (to allow the toppings to set), slice and serve; a pair of scissors is a great cutting tool.
        <Timer title="Cool" seconds={600} />
      </li>
      <li style={styles.li}>Yield: 1-2 pizzas, 3-4 servings. Enjoy! &#127829;&#127829;&#127829; </li>
    </ol>
  </div>
)

export default Radium(Instructions);
