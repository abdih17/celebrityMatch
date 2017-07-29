import React from 'react'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

import PictureItem from '../picture-item'

class PictureList extends React.Component{

  render(){
    return (
      <div>
        <h3>Pictures</h3>
        <PictureItem />
      </div>
    )
  }
}

export default PictureList
