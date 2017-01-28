import React, { Component } from 'react';
import Radium from 'radium';

export const secondsToMinutes = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  seconds = seconds > 9 ? '' + seconds : '0' + seconds;
  let result = `${minutes}:${seconds}`
  return result;
}

const btnStyle = {
  padding: '10px 24px',
  fontSize: '1rem',
  background: 'white',
  border: '2px solid black',
  ':hover': {
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  }
}
const pStyle = {
  textAlign: 'center',
  fontSize: '.8rem',
  margin: '0',
}
const finishedStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'red',
}
const spanStyle = {
  paddingRight: '12px',
}
const timerStyle = {
  display: 'flex',
  justifyContent: 'center',
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: this.props.seconds,
      isActive: false,
    }
  }
  toggleTimer() {
    let timer = setInterval(() => {
      if (this.state.isActive === false) {
        clearInterval(timer);
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
        <div style={finishedStyle}>
          <p>{this.props.title} complete!</p>
        </div>
      );
    }
    return(
      <div>
        <p style={pStyle}>{this.props.title}</p>
        <div style={timerStyle}>
          <span style={spanStyle}>{secondsToMinutes(this.state.totalSeconds)}</span>
          <button
            style={btnStyle}
            onClick={this.toggleTimer.bind(this)}>
            {this.state.isActive ? '❚❚' : '►'}
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Radium(Timer);
