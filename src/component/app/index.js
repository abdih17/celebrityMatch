import React from 'react'
import ReactDom from 'react-dom'

import DashboardContainer from '../dashboard-container'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1> Hello World </h1>
        <DashboardContainer />
      </div>
    )
  }
}

export default App
