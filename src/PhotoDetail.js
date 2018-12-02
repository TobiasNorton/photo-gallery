import React, { Component } from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'

class PhotoDetail extends Component {
  render() {
    let category = this.props.match.params.category
    let index = this.props.match.params.photoNumber
    console.log(category, index)
    return (
      <div className="photo-detail">
        <img src={data[category].photos[index].imageURL} />
      </div>
    )
  }
}

export default PhotoDetail
