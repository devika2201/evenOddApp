import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {increase: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({increase: prevState.increase + randomNum}))
  }

  render() {
    const {increase} = this.state
    const paraText = increase % 2 !== 0 ? 'Odd' : 'Even'

    return (
      <div className="bg-container">
        <h1 className="heading">
          Count <span>{increase}</span>
        </h1>
        <p className="para">
          Count is <span>{paraText}</span>
        </p>
        <button type="button" className="buttons" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
