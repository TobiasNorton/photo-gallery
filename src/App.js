import React, { Component } from 'react'
import './App.css'
// import data from './data.json'
import data from './myJSON.json'
import PhotoList from './PhotoList'
import CategoryList from './CategoryList'
import PhotoDetail from './PhotoDetail'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Photo Gallery</h1>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/:category/" component={PhotoList} />
          <Route exact path="/:category/:photoNumber" component={PhotoDetail} />
        </div>
      </Router>
    )
  }
}

export default App
