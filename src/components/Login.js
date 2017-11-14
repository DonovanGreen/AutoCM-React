import React from 'react'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      company: "",
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.getUser(user)
  }


  render() {
    return(
      <div id="login-page">
        <div className="enter-site">
          <div className="enter-site-inner">
            <form id="user-login" onSubmit={this.handleSubmit}>
              <h1 className="text-primary">Login</h1>
              <input onChange={this.handleChange} name="company" type="text" placeholder="Username"/>
              <input onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
