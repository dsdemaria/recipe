import React from 'react';
import Radium from 'radium';
import Timer from './Timer';
import { connect } from 'react-redux';
import getInstructions from '../../reducers/getInstructions'

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

const Instructions = (props) => {
  const instructionsList = props.instructions.map(step => {
    return (
      <li key={step.id} style={styles.li}>
        {step.instruction}
        {step.timer ? <Timer seconds={step.timer.seconds} title={step.timer.title} /> : null}
      </li>
    )
  });
  return (
    <div>
      <h3 style={styles.h3}>Instructions</h3>
      <ol style={styles.ol}>
        {instructionsList}
      </ol>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    instructions: getInstructions()
  }
}

export default connect(mapStateToProps)(Radium(Instructions));
