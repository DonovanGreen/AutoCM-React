import React from 'react'
import AddEvent from './AddEvent'
import EventsAdapter from '../adapters/EventsAdapter'

export default class SlotInfo extends React.Component {
  constructor() {
    super()
  }


  addEvent = (event) => {
    this.props.addEvent(event,this.props.slotData.start.toLocaleString(), this.props.slotData.end.toLocaleString())
  }

  render() {
    return (
      <div className="slot-info-modal">
        <div className="slot-info-inner-modal">
          {this.props.slotData.start.toLocaleString()}
          <AddEvent addEvent={this.addEvent} slotData={this.props.slotData} />
        </div>
      </div>
    )
  }

}
