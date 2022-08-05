import React from 'react'
import DateCard from './DateCard'
const DateCardContainer = ({isExpanded, filteredDevices}) => {
  return (
    <>
    {/* <h4 className="text-white sm:mx-12">Feed data by timeslot:</h4> */}
    <div className={`h-full pb-36 px-0 sm:mx-12 rounded transition-all duration-500 easy`}>
    
{
    filteredDevices && filteredDevices.map((item, index) => (

    <DateCard item={item} key={index} index={index}/>
    ))
}
 </div>
 </>
  )
}

export default DateCardContainer