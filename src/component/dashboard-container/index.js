import React from 'react'
import {connect} from 'react-redux'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

import PictureList from '../picture-list'

class DashboardContainer extends React.Component{
  render(){
    return (
      <div>
        <h2>Dashboard Container</h2>
        <PictureList />
      </div>
    )
  }
}

export default DashboardContainer
