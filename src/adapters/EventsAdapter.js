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
        var parsedStartNumberArray = []
          data.start.split(",").map((number) => {
            parsedStartNumberArray.push(parseInt(number))
          })
        data.start = new Date(...parsedStartNumberArray)
        var parsedEndNumberArray = []
          data.end.split(",").map((number) => {
            parsedStartNumberArray.push(parseInt(number))
          })
        data.end = new Date(...parsedEndNumberArray)
      })
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
