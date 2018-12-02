import React, { Component } from 'react'
import PhotoList from './PhotoList.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <div className="category-list">
        <a href="#">Pandas Photos</a>
        <a href="#">Miniature Paintings Photos</a>
      </div>
    )
  }
}

export default CategoryList

// **WITHOUT ROUTER**
// Create a photoList state, and set it to undefined
// Set each <a> with an onClick that calls a function
// This function sets the state of the photoList, and depending
// which one it is, it will return a Photolist component instance.
// Or maybe it should return *either* a panda list OR a miniatures
// list? That would make more sense, because it's more like a
// different page.
