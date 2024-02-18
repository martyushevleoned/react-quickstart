// npx create-react-app my-app
// npm install --save-dev @babel/plugin-proposal-private-property-in-object
// npm run build
// npm run start
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


const Header = () => {
  return <header>some header</header>
}

function Footer () {
    return <footer>footer</footer>
}

class App extends React.Component {

  someText = "help text"
  inputClick() {console.log("clicked")}
  mouseOver() {console.log("mouse over")}

  render () {
  return (
    <div>
      <Header/>
      <input 
      className="input"
      placeholder={this.someText}
      onClick={this.inputClick} 
      onMouseOver={this.mouseOver}>
      </input>
      <Footer/>
    </div>
    )
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(<App/>)