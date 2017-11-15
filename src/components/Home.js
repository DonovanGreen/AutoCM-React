import React from 'react'
import MyCalendar from './MyCalendar'

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
        <button onClick={this.props.logOut}> Log Out </button>
        <p> {this.props.currentUser.company} </p>
        <MyCalendar />
      </div>
    )
  }
}
