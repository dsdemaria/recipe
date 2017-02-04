import React, { Component } from 'react';
import Radium from 'radium';

export const _secondsToMinutes = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  seconds = seconds > 9 ? '' + seconds : '0' + seconds;
  let result = `${minutes}:${seconds}`
  return result;
}
const styles = {
  button: {
    padding: '10px 24px',
    fontSize: '1rem',
    background: 'white',
    border: '2px solid black',
    ':hover': {
      background: 'black',
      color: 'white',
      cursor: 'pointer',
    }
  },
  timer: {
    borderLeft: '1px solid black',
    marginLeft: '12px',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '12px',
    finished: {
      display: 'flex',
      justifyContent: 'center',
      background: 'black',
      color: 'white',
    }
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '12px',
    textAlign: 'center',
    p: {
      fontSize: '.8rem',
      margin: '0',
      lineHeight: '1rem',
    },
  }
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: props.seconds,
      isActive: false,
      intervalID: null,
    }
    this.timer = this.timer.bind(this)
    this.toggleTimer = this.toggleTimer.bind(this)
  }
  // creates and clears interval based on isActive status
  toggleTimer() {
    if (this.state.isActive) {
      clearInterval(this.state.intervalID);
      this.setState({
        isActive: !this.state.isActive,
        intervalID: null,
      });
    } else {
      const intervalID = setInterval(this.timer, 1000)
      this.setState({
        isActive: !this.state.isActive,
        intervalID: intervalID,
      });
    }
  }
  // timer only handles decreasing state by one
  timer() {
    let newCount = this.state.totalSeconds - 1
    if (newCount >= 0) {
      this.setState({
        totalSeconds: newCount
      });
    } else {
      clearInterval(this.state.intervalID); // prevents timer going below 0 seconds
    }
  }
  render() {
    if (this.state.totalSeconds === 0) {
      return (
        <div style={styles.timer.finished}>
          <p>{this.props.title} complete!</p>
        </div>
      );
    }
    return (
      <div style={styles.timer}>
        <div style={styles.titleWrapper}>
          <p style={styles.titleWrapper.p}>{this.props.title}</p>
          <span>{_secondsToMinutes(this.state.totalSeconds)}</span>
        </div>
        <button
          style={styles.button}
          onClick={this.toggleTimer}>
          {this.state.isActive ? '❚❚' : '►'}
        </button>
      </div>
    );
  }
}

export default Radium(Timer);
