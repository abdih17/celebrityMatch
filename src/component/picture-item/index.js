import React from 'react'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

let urls = [
  '../images/charles.png',
  '../images/chris.jpg',
  '../images/chrisP.png',
  '../images/chrisPR.png',
  '../images/david.png',
  '../images/greyworm.png',
  '../images/jason.png',
  '../images/jessie.png',
  '../images/jon.png',
  '../images/kofi.png',
  '../images/liam.png',
  '../images/orlando.png',
  '../images/richard.png',
  '../images/robert.png',
  '../images/ryanG.png',
  '../images/ryanR.png',
  '../images/taylor.png',
  '../images/zac.png',
  '../images/zayn.png',
]

class PictureItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      imageURLs: ['chris.jpg', 'zayn.png', 'zac.png'],
    }

    this.renderImage = this.renderImage.bind(this)
  }

  renderImage(imageUrl) {
    console.log('IMAGEEEEEEEE: ', typeof imageUrl)
    console.log('IMAGE*******: ', imageUrl)
    return (
      <div>
        <img src={require('../images/' + imageUrl)} />
      </div>
    )
  }

  render() {
    return (
      <div className="gallery">
        <h5>THESE IS THE IMAGES</h5>
        <div className="images">
          {this.state.imageURLs.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    )
  }
}

export default PictureItem
