import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isTimerIsRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  start = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerIsRunning: true})
  }

  stop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerIsRunning: false})
  }

  reset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerIsRunning: false, time: 0})
  }

  getStopwatch = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const displayMinutes = minutes > 9 ? minutes : `0${minutes}`
    const displaySeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${displayMinutes}:${displaySeconds}`
  }

  render() {
    const {isTimerIsRunning} = this.state

    return (
      <div className="container">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="stopwatch-timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="stopwatch">{this.getStopwatch()}</h1>
          <div className="buttons">
            <button
              type="button"
              className="button1"
              onClick={this.start}
              disabled={isTimerIsRunning}
            >
              Start
            </button>
            <button type="button" className="button2" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="button3" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
