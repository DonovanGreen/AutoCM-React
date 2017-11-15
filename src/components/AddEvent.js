import React from 'react'

export default class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        title: "",
        allDay: null
    }
  }

  handleChange = (e) => {
    debugger
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let event = this.state
    this.props.addEvent(event)
  }

  handleToggle = (e) => {
    if(e.target.value == "on"){
      debugger
      this.setState({
        allDay:true
      })
    }
  }

  render(){
    return(
      <div>
        <h4> Create </h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="title" placeholder="Title" required/>
          <div class="switch">
             <label>
              All Day
               <input onChange={this.handleToggle} type="checkbox"/>
               <span class="lever"></span>
             </label>
           </div>
          <button className="waves-effect waves-light btn"> Submit </button>
        </form>
      </div>
    )
  }
}
