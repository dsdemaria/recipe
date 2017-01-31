import React, { Component } from 'react';
import Radium from 'radium';

export const secondsToMinutes = (totalSeconds) => {
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
  constructor(props, timer) {
    super(props);
    this.timer = timer;
    this.state = {
      totalSeconds: this.props.seconds,
      isActive: false,
    }
    this.toggleTimer = this.toggleTimer.bind(this)
  }
  componentDidUpdate() {
    if (!this.state.totalSeconds ) {
      clearInterval(this.timer);
    }
  }
  toggleTimer() {
    this.timer = setInterval(() => {
      if (!this.state.isActive) {
        clearInterval(this.timer);
      } else {
        this.setState({
          totalSeconds: this.state.totalSeconds - 1
        })
      }
    }, 1000);
    !this.state.isActive ?
      this.setState({
        isActive: true,
        buttonStatus: 'Pause Timer',
      })
    :
      this.setState({
        isActive: false,
        buttonStatus: 'Start Timer',
      })
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
          <span>{secondsToMinutes(this.state.totalSeconds)}</span>
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
