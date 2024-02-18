import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.png'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      someText: "help text",
      userData: ""
    }

    this.inputClick = this.inputClick.bind(this)
  }

  inputClick() {
    console.log("clicked")
    this.setState({someText: "new text"})
  }

  mouseOver() {
    console.log("mouse over")
  }

  render () {
  return (
    <div>
      <Header title="header1"/>
      <Header title="header2"/>
      <Header title="header3"/>
      <input 
        className="input"
        placeholder={this.state.someText}
        onClick={this.inputClick} 
        onMouseOver={this.mouseOver}
        onChange={event => this.setState({userData: event.target.value})}>
      </input>
      <h1>{this.state.someText}</h1>
      <h2>{this.state.userData}</h2>
      <Image image={logo}></Image>
    </div>
    )
  }
}

export default App