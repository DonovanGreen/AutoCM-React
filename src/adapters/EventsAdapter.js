const path = 'http://localhost:3000/api/v1/events'
export default class EventsAdapter {

  static getEvents(){
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
    .then(data => {
      data.map((data) => {
        data.start = new Date(data.start)
        data.end = new Date(data.end)
      })
      return data
    })
  }

  static addEvent(event, start, end) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        title: event.title,
        allDay: event.allDay,
        start: start,
        end: end,
        type: "social"
      })
    })
    .then( resp => resp.json())
    .then(data => {
        data.start = new Date(data.start)
        data.end = new Date(data.end)
        return data
    })
  }

}

let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}
