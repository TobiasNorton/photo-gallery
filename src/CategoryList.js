import React, { Component } from 'react'
import data from './data.json'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        <li>{data.pandas.title}</li>
        <li>{data.miniatures.title}</li>
      </ul>
    )
  }
}

export default CategoryList
