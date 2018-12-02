import React, { Component } from 'react'
// import data from './data.json'
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
            <>
              {console.log(category)}
              <Link to={`/${category}/${index}`} key={index}>
                <img src={photo.imageURL} />
              </Link>
            </>
          )
        })}
        <Link to="/">Back to Categories</Link>
      </div>
    )
  }
}

export default PhotoList
