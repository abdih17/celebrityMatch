import React from 'react'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

let counter = 0
let rightIndex = 0
let leftIndex = 0
let centerIndex = 0
let currentImages = []

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
      buttonText: 'Generate a Hottie',
      random: false,
      currentImages: [],
    }

    this.renderImage = this.renderImage.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.imagesOnDom = this.imagesOnDom.bind(this)
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  renderImage(imageName, i) {
    console.log('(((((((((((((((((((((((((((((((((((((((((hello')
    leftIndex = parseInt(this.getRandomNumber(1, 20))
    console.log(this.state.imagesArray[leftIndex])
    centerIndex = parseInt(this.getRandomNumber(1, 20))
    console.log(this.state.imagesArray[centerIndex])
    rightIndex = parseInt(this.getRandomNumber(1, 20))
    console.log(this.state.imagesArray[rightIndex])

    if (leftIndex === centerIndex || centerIndex === rightIndex || leftIndex === rightIndex) {
      this.state.currentImages = [leftIndex, centerIndex, rightIndex]
      console.log('??????????????????????????', this)
      console.log('duplicate caught')
      this.renderImage()
    } else {
      counter++
      this.state.currentImages = [leftIndex, centerIndex, rightIndex]
      console.log('**************************', this)
      // console.log('COUNTER*********************************', counter)
      return this.imagesOnDom(imageName, i)
    }
  }

  imagesOnDom(imageName, i) {
    // console.log('IMAGENAME= ', imageName)
    // console.log('KEY I++ ', i)
    // console.log('COUNTER-------------------------------', counter)
    return (
      <div>
        <li>
          <img src={require('../images/' + this.state.imagesArray[leftIndex] + '.png')}/>
          {console.log('LEFTINDEX', this.state.imagesArray[leftIndex])}
        </li>

        <li>
          <img src={require('../images/' + this.state.imagesArray[centerIndex] + '.png')}/>
          {console.log('CENTERINDEX', this.state.imagesArray[centerIndex])}
        </li>

        <li>
          <img src={require('../images/' + this.state.imagesArray[rightIndex] + '.png')}/>
          {console.log('RIGHTINDEX', this.state.imagesArray[rightIndex])}
        </li>
      </div>
    )
  }


  render() {
    console.log(this)
    return (
      <div className="gallery">
        <h5>THESE IS THE IMAGES</h5>
        <div className="images-container">
          <ul>
            {this.state.imagesArray.map((imageName, i) => {
              return this.renderImage(imageName, i)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default PictureItem
