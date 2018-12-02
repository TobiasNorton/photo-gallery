import React, { Component } from 'react'
import data from './data.json'

class PhotoList extends Component {
  test = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div className="photo-list">
        {this.test()}
        {/* {Object.keys(data)} */}
        {/* <Link to="/panda_photos/:photoNumber">Foobar</Link> */}
      </div>
    )
  }
}

export default PhotoList
