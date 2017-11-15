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
      this.setState({
        allDay:true
      })
    }
  }

  render(){
    return(
      <div className="row">
        <h4> Add Event </h4>
        <div className="col l12">
          <form onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
              <input onChange={this.handleChange} name="title" placeholder="Title" required/>
          </div>
          <div className="align-left">
              <div className="switch">
                 <label>
                  All Day
                   <input onChange={this.handleToggle} type="checkbox"/>
                   <span className="lever"></span>
                 </label>
               </div>
            </div>
            <button className="waves-effect waves-light btn"> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}
