import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './myJSON.json'
class CategoryList extends Component {
  render() {
    return (
      <div className="category-list">
        <h3>Choose an artist to see some of their work:</h3>
        <section>
          {Object.keys(data).map((category, index) => {
            return (
              <div key={index} className="artist">
                <Link to={`/${category}`} className="link">
                  <img src={data[category].photos[1].imageURL} className="preview-image" />
                </Link>

                <Link to={`/${category}`} className="link">
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
