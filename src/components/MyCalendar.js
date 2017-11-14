import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends React.Component {

    constructor(props, context) {
      super(props, context);
    }

    editEvent = (e) => {
      alert("this have been selected ")
      console.log(e)
      debugger
    }

    editSlot = () => {
      alert("selected this slot")
    }

    render() {
      return (
        <div>
          <BigCalendar
            tep={60}
            defaultDate={new Date(2015, 6, 1)}
            culture='en-GB'
            onSelectSlot={this.editSlot}
            onSelectEvent={this.editEvent}
            events={[
                {
                  'title': 'All Day Event very long title',
                  'allDay': true,
                  'start': new Date(2015, 3, 0),
                  'end': new Date(2015, 3, 1)
                }
              ]}
            views={['month', 'week', 'day', 'agenda']}/>
        </div>
      );
    }
  }
