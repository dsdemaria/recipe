import instructions from './instructions.json'

const getInstructions = (state = {}, action) => {
  return instructions.instructions
}

export default getInstructions
