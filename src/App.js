import React, { Component } from 'react';
import Header from "./header"
import Meme from "./meme"
import "./meme.css"

class App extends Component{
  constructor() {
    super()
    this.state = { }
    
  }

  render() {
    
    return (
      <div id="container">
        <Header />
        <Meme />
      </div>
      
    )
  }
}
export default App;


