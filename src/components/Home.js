import React from 'react'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: {}
    }
  }

  render() {
    return(
      <div>
        <p> Home </p>
      </div>
    )
  }
}
