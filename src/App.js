import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import data from './data.json'

import CategoryList from './CategoryList.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <CategoryList />
      </div>
    )
  }
}

export default App
