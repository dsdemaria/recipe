import { combineReducers } from 'redux'
import getInstructions from './getInstructions'

const recipeApp = combineReducers({
  instructions: getInstructions
});

export default recipeApp
