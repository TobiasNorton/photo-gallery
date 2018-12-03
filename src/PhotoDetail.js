import React, { Component } from 'react'
import data from './myJSON.json'
import { Link } from 'react-router-dom'

class PhotoDetail extends Component {
  render() {
    let category = this.props.match.params.category
    let index = this.props.match.params.photoNumber
    console.log(category, index)
    return (
      <div className="photo-detail">
        <h3>"{data[category].photos[index].title}"</h3>
        <img src={data[category].photos[index].imageURL} className="image-detail" />

        <section className="links-container">
          <Link to={`/${category}`} className="bottom-link">
            Back to {`${data[category].title}`}
          </Link>
          <Link to="/" className="bottom-link">
            Back to Home
          </Link>
        </section>
      </div>
    )
  }
}

export default PhotoDetail
