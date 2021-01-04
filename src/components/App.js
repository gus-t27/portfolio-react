import React, { Component } from 'react'
import '../style/App.css'
import Navigation from './Navigation'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navigation />
        </div>
      </div>
    )
  }
}

