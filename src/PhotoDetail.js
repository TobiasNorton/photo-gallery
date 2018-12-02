import React, { Component } from 'react'
import data from './data.json'

class PhotoDetail extends Component {
  render() {
    return (
      <div className="photo-detail">
        <img src={data.pandas.photos[0].imageURL} alt="Panda Bear" />
      </div>
    )
  }
}

export default PhotoDetail
