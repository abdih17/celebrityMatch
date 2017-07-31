import React from 'react'

import {
  pictureCreate,
  pictureReset,
} from '../../action/picture-action.js'

let counter = 0
let rightIndex = 0
let leftIndex = 0
let centerIndex = 0
var currentImage = []

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
      urlImageArray: [],
      random: false,
    }

    // this.renderImage = this.renderImage.bind(this)
    this.getRandomNumber = this.getRandomNumber.bind(this)
    this.makeURLs = this.makeURLs.bind(this)
    this.randomlyShowImages = this.randomlyShowImages.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    // e.preventDefault()

    console.log('inside event handler')
    console.log('%%%%%%%%', counter)
    var imageDiv = document.getElementById('three-images')
    imageDiv.innerHTML = ''
    this.randomlyShowImages()
    console.log('outside of it')
    // this.state.imagesArray.map((imageName) => {
    //   if (e.target.src === imageName)
    // }
  }

  makeURLs(imageName){
    this.state.urlImageArray.push('../images/' + imageName + '.png')
    // console.log('MAKE URLS', this.state)
    counter++
    if (counter == this.state.imagesArray.length){
      console.log('hellllllllllo')
      this.randomlyShowImages()
    }
  }

  randomlyShowImages(imageName) {
    if(counter < 22) {
      console.log('inside if statement')
      this.makeURLs(imageName)
      console.log('outside if statement')
    } else if ( counter >= 22 ) {
      counter = 0
      this.state.imagesArray.map((imageName) =>
        this.makeURLs(imageName)
      )
    }

    console.log('#$#$#$#$#$', counter)
    console.log('!!!!!!', this.state.imagesArray.length)
    if (counter >= 22) {
      leftIndex = parseInt(this.getRandomNumber(0, 20))
      currentImage.push(leftIndex)
      // console.log(this.state.urlImageArray[leftIndex])

      centerIndex = parseInt(this.getRandomNumber(0, 20))
      currentImage.push(centerIndex)
      // console.log(this.state.urlImageArray[centerIndex])

      rightIndex = parseInt(this.getRandomNumber(0, 20))
      currentImage.push(rightIndex)
      // console.log(this.state.urlImageArray[rightIndex])

      // console.log('&&&&currentImage ARRAY: ', currentImage)
      console.log('checking this out:', this.state.imagesArray[leftIndex])

      return (
        <div onClick={this.handleClick}>
          <li>
            <img src={require('../images/' + this.state.imagesArray[leftIndex] + '.png')} />
          </li>

          <li>
            <img src={require('../images/' + this.state.imagesArray[centerIndex] + '.png')} />
          </li>

          <li>
            <img src={require('../images/' + this.state.imagesArray[rightIndex] + '.png')} />
          </li>
        </div>
      )
    }
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    console.log(this)
    return (
      <div className="gallery">
        <h5>THESE IS THE IMAGES</h5>
        <div className="images-container">
          <ul>
            {counter = 0}
            {this.state.imagesArray.map((imageName) => {
              return this.randomlyShowImages(imageName)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default PictureItem
