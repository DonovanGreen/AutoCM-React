import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SlotInfo from './SlotInfo'
import EventsAdapter from '../adapters/EventsAdapter'

BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends React.Component {

    constructor(props, context) {
      super(props, context)
        this.state = {
          events: [],
          slotInfoVisible: false,
          slotData: null
        }
    }


    componentDidMount() {
      EventsAdapter.getEvents()
      .then(data => {
        this.setState({
          events: data
        })
      })
    }

    addEvent = (event, start, end) => {
      EventsAdapter.addEvent(event,start, end)
      .then((data) => {
        this.setState({
          slotInfoVisible: false,
          slotData: null,
          events: [...this.state.events, data]
        })
      })
    }

    editEvent = (e) => {
      alert("this have been selected ")
      console.log(e)
    }

    renderSlotInfo = (slotInfo) => {
      console.log(slotInfo.start.toLocaleString)
      this.setState({
        slotInfoVisible: true,
        slotData: slotInfo
      })
    }

    render() {
      return (
        <div>
        {this.state.slotInfoVisible ? <SlotInfo addEvent={this.addEvent} slotData={this.state.slotData} /> : null }
          <div className="calendar-outter-container">
            <div className="calendar-inner-container">
              <BigCalendar
                popup
                selectable
                tep={60}
                culture='en-GB'
                onSelectEvent={this.editEvent}
                onSelectSlot={this.renderSlotInfo}
                events={this.state.events}
                views={['month', 'week', 'day', 'agenda']}/>
            </div>
          </div>
        </div>
      );
    }
  }
