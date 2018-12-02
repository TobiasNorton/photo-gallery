import React, { Component } from 'react'
import data from './data.json'

class PhotoList extends Component {
  render() {
    return (
      <div className="photo-list">
        <p>{data.pandas.title}</p>
      </div>
    )
  }
}

export default PhotoList
