import React, { Component } from 'react'
import data from './myJSON.json'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    console.log(this.props)
    let category = this.props.match.params.category
    return (
      <div className="photo-list">
        {data[category].photos.map((photo, index) => {
          return (
            <Link to={`/${category}/${index}`} key={index}>
              <img src={photo.imageURL} className="list-pic" />
            </Link>
          )
        })}
        <section className="links-container">
          <Link to="/" className="bottom-link">
            Back to Home
          </Link>
        </section>
      </div>
    )
  }
}

export default PhotoList
