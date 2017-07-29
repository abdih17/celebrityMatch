import React from 'react'
import ReactDom from 'react-dom'

import DashboardContainer from '../dashboard-container'
import PictureDisplay from '../picture-display'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1> Hello World </h1>
        <DashboardContainer />
        <PictureDisplay />
      </div>
    )
  }
}

export default App
