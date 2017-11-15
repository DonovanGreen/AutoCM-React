import React from 'react'

export default class SlotInfo extends React.Component {
  constructor() {
    super()
  }

  render() {
    debugger
    return (
      <div className="slot-info-modal">
        {this.props.slotData.start.toLocaleString()}
      </div>
    )
  }

}
