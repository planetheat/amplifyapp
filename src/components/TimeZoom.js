import React, {useState} from 'react'

const TimeZoom = ({setLower, setUpper, upper, lower, now2}) => {


  const [time, setTime] = useState("day")

  const incrementValue = () => {
      if(time === "day"){
          return 86400
          // a day's worth of seconds
      }else{
          return 3600
          // an hour's worth of seconds
      }
  }
  const zoomOut = () => {
    console.log('out')
    setLower(lower - incrementValue())
    setUpper(upper + incrementValue())
  }

  const zoomIn = () => {
    console.log('in')
    setLower(lower + incrementValue())
    setUpper(upper - incrementValue())
  }

  // const zoomToday = () => {
  //   console.log('today')
  // }

  // const clearZoom = () => {
  //   console.log('clear')
  // }

  const toggleTime = () => {
    if(time === "day"){
        setTime("hour")
    }else{
        setTime("day")
    }
}

  return (
      <div className="flex justify-between text-white m-1">
      <div><button className="bg-yellow-400 text-gray-800 rounded px-8 py-1" onClick={zoomOut}>-</button></div>
      <div><button className="bg-yellow-300 rounded px-2 py-1 text-gray-800" onClick={toggleTime}><span className={time === "hour" ? "font-bold text-gray-800" : "text-gray-400" }>Hour</span>/<span className={time === "hour" ? "text-gray-500": "font-bold"}>Day</span></button></div>

      {/* <div><button className="bg-yellow-200 text-gray-800 rounded px-5 py-1" onClick={zoomToday}>Zoom Today</button></div> */}
      {/* <div><button className="bg-yellow-200 text-gray-800 rounded px-5 py-1" onClick={clearZoom}>Clear Zoom</button></div> */}
      <div><button className="bg-yellow-400 text-gray-800 rounded px-8 py-1" onClick={zoomIn}>+</button></div>
  </div>
  )
}

export default TimeZoom