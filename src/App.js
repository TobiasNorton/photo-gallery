import React, { Component } from 'react'
import './App.css'
import data from './data.json'
import PhotoList from './PhotoList'
import CategoryList from './CategoryList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <PhotoDetail />
      </div>
    )
  }
}

export default App
