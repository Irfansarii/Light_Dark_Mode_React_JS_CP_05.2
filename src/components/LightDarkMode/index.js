// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {text: true, color: true}
  onButtonClick = () => {
    this.setState(prevState => ({text: !prevState.text}))
    this.setState(prevState => ({color: !prevState.color}))
  }

  render() {
    const {text, color} = this.state
    const modeClassName = color ? 'dark-Mode' : 'light-Mode'
    const buttonText = text ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`container ${modeClassName}`}>
        <h1 className={`modeClassName`}>Click To Change Mode</h1>
        <button className="button" onClick={this.onButtonClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
