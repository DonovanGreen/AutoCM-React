import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends React.Component {

    constructor(props, context) {
      super(props, context)
        this.state = {
          events: []
        }
    }

    editEvent = (e) => {
      alert("this have been selected ")
      console.log(e)
    }

    editSlot = (e) => {
      alert("alert")
    }

    render() {
      return (
        <div className="calendar-outter-container">
          <div className="calendar-inner-container">
            <BigCalendar
              selectable
              tep={60}
              culture='en-GB'
              onSelectEvent={this.editEvent}
              onSelectSlot={this.editSlot}
              events={this.state.events}
              views={['month', 'week', 'day', 'agenda']}/>
          </div>
        </div>
      );
    }
  }
