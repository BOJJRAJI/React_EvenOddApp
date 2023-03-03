import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber)
    this.setState(prevState => {
      const a = prevState.count + randomNumber
      if (a > 100) {
        return {count: 0}
      }
      return {count: prevState.count + randomNumber}
    })
  }

  render() {
    const {count} = this.state
    console.log(count)
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {text}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="text-para">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
