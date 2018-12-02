import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import data from './myJSON.json'
import data from './myJSON.json'
class CategoryList extends Component {
  render() {
    return (
      <div className="category-list">
        <h3>Choose a Category</h3>
        <section>
          {Object.keys(data).map((category, index) => {
            return (
              <div>
                <Link to={`/${category}`} key={index}>
                  {data[category].title}
                </Link>
                <p key={index}>{data[category].description}</p>
              </div>
            )
          })}
        </section>
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
