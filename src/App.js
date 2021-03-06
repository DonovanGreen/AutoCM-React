import React, { Component } from 'react';
import './App.css';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import MyCalendar from './components/MyCalendar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Login from './components/Login'
import Home from './components/Home'
import SessionsAdapter from './adapters/SessionsAdapter'


class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
    }

  componentWillReceiveProps(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
    }

  renderLogin = () => {
    return(
      <Login getUser={this.getUser} />
    )
  }

  renderHome = () => {
    return(
      <Home currentUser={this.state.currentUser} logOut={this.logOut}/>
    )
  }

  getUser = (user) => {
   return SessionsAdapter.getUser(user)
   .then( (userData) => {
     this.setState({
       currentUser: userData
     })
     localStorage.setItem('token', userData.jwt)
   })
   .then(() => {
     this.context.router.history.push("/home")
   })
 }

 logOut = () => {
    localStorage.token = ""
    this.setState({
      currentUser:{}
    })
    this.context.router.history.push("/")
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={this.renderLogin}/>
        <Route exact path="/home" render={this.renderHome}/>
      </div>
    );
  }
}

export default App;
