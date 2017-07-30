import React from 'react'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

let counter = 0
let rightIndex = 0
let leftIndex = 0
let centerIndex = 0

class PictureItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      imagesArray: [
        'chrisH', 'zayn', 'lance' ,'zac', 'chrisPR', 'david',
        'taylor', 'kofi', 'ryanR', 'chrisP', 'charles', 'greyworm',
        'ryanG', 'jason', 'don', 'robert', 'jessie', 'richard',
        'jon', 'orlando', 'liam',
      ],
      random: false,
      buttonText: 'Randomly Generate a Celebrity',
    }

    this.renderImage = this.renderImage.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  renderImage() {
    console.log('hello')
    leftIndex = parseInt(this.getRandomNumber(0, 20))
    console.log(this.state.imagesArray[leftIndex])
    centerIndex = parseInt(this.getRandomNumber(0, 20))
    console.log(this.state.imagesArray[centerIndex])
    rightIndex = parseInt(this.getRandomNumber(0, 20))
    console.log(this.state.imagesArray[rightIndex])

    return (
      <div>
        <ul>
          <li>
            <img src={require('../images/' + this.state.imagesArray[leftIndex] + '.png')} />
          </li>

          <li>
            <img src={require('../images/' + this.state.imagesArray[centerIndex] + '.png')} />
          </li>

          <li>
            <img src={require('../images/' + this.state.imagesArray[rightIndex] + '.png')} />
          </li>
        </ul>
      </div>
    )
  }

  render() {
    console.log(this)
    return (
      <div className="gallery">
        <h5>THESE IS THE IMAGES</h5>
        <div className="images-container">
          {console.log(this)}
          <button onClick={this.renderImage}> {this.state.buttonText} </button>
          
        </div>
      </div>
    )
  }
}

export default PictureItem
