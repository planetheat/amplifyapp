import React, {useState} from 'react'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'

const TimeIncrementer = ({setUpper, setLower, upper, lower}) => {
    
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
    // Increment time by day or hour depending on toggle state
    const leftClick = () => {
        // setTimeQuantity(timeQuantity - incrementValue())
        setUpper(upper - incrementValue())
        setLower(lower - incrementValue())
    }
    console.log("upper in function",upper)

    const rightClick = () => {
        // setTimeQuantity(timeQuantity + incrementValue())
        setUpper(upper + incrementValue())
        setLower(lower + incrementValue())
    }

    // user can switch between changeing displayed data by a day or an hour 
    const toggleTime = () => {
        if(time === "day"){
            setTime("hour")
        }else{
            setTime("day")
        }
    }

  return (
    <div className="flex justify-between text-white m-1">
        <div><button className="bg-yellow-400 text-gray-800 rounded px-2 py-1 flex" onClick={leftClick}><FaAngleLeft style={{height: '1.4em', width: '1.4em', color: "black", paddingTop: "3px"}}/>1 {time === "hour" ? "hr" : "day"}</button></div>
        <div><button className="bg-yellow-300 rounded px-2 py-1 text-gray-800" onClick={toggleTime}><span className={time === "hour" ? "font-bold text-gray-800" : "text-gray-400" }>Hour</span>/<span className={time === "hour" ? "text-gray-500": "font-bold"}>Day</span></button></div>
        <div><button className="bg-yellow-400 text-gray-800 rounded px-2 py-1 flex" onClick={rightClick}>1 {time === "hour" ? "hr" : "day"}<FaAngleRight style={{height: '1.4em', width: '1.4em', color: "black", paddingTop: "3px"}}/></button></div>
    </div>
  )
}

export default TimeIncrementer