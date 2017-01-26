import React, { Component } from 'react';


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: this.props.seconds,
      isActive: false,
      buttonStatus: 'Start Timer',
    }
  }
  secondsToMinutes(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = seconds > 9 ? '' + seconds : '0' + seconds;
    let result = `${minutes}:${seconds}`
    return result;
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
    return(
      <div>
        <span>{this.secondsToMinutes(this.state.totalSeconds)}</span>
        <button onClick={this.toggleTimer.bind(this)}>{this.state.isActive ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}
