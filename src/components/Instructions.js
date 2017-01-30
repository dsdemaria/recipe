import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  h3: {
    textAlign: 'center',
  },
  ol: {
    fontSize: '1rem',
  }
}

const Instructions = (props) => (
  <div>
    <h3 style={styles.h3}>Instructions</h3>
    <ol style={styles.ol}>
      <li>Dissolve the sugar, 1 tbsp of bread flout, and yeast in the lukewarm water (about 90 degrees F.).</li>
      <li>Add the flour, starting with 2  cups flour and adding more as necessary to make a soft, smooth dough.</li>
      <li>Knead the dough (with your hands, a mixer, or your bread machine set on the dough cycle) until it is smooth and elastic, about 7 to 10 minutes.</li>
      <li>Place the dough in a lightly greased bowl or other container, cover it, and let it rise for 1 to 2 hours.</li>
      <li>Gently deflate the dough, and divide it into two pieces, for medium-crust pizza; or one for thicker crusts. Roll each piece, on a floured surface, with a floured rolling pin, into a circle to fit a 12 inch pizza pan. To roll, work from the center to the outside like pie dough. Let the dough rest several times to relax it and make it more cooperative. Turn it over from time to time and roll the reverse side.</li>
      <li>Place the rounds on pizza pans; on baking sheets; or, if you have a pizza stone in your oven, on parchment.</li>
      <li>Preheat your oven to 450°F. While it's heating, get out your toppings, which you've prepared ahead. Some possibilities include sliced pepperoni; sautéed mushroooms, onions, or peppers; cooked meats; olives; and grated or shredded cheese.</li>
      <li>Brush each crust with a bit of olive oil; spread pizza or spaghetti sauce lightly over the surface, and let your guests add their favorite toppings. Sprinkle the top with grated cheese.</li>
      <li>Bake the pizzas for 15 to 20 minutes, until they are golden brown, the toppings are hot and bubbly, and the cheese is melted. Remove the pizzas from the oven.</li>
      <li>Immediately transfer pizzas to a cooling rack, so their bottoms do not get soggy. After about 10 minutes (to allow the toppings to set), slice and serve; a pair of scissors is a great cutting tool.</li>
      <li>Yield: 1-2 pizzas, 3-4 servings.</li>
    </ol>
  </div>
)

export default Radium(Instructions);
