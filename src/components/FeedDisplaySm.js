import React from 'react'
import DeviceStatus from './DeviceStatus'

const FeedDisplaySm = ({device, selectedRoom}) => {

const background = (index) => {
  if(index % 2 === 1){
      return "bg-gray-300"
  }else{
      return "bg-gray-400"
  }
}
console.log(device)

  return (
    <div className="p-2 h-auto overflow-y-auto bg-white rounded mb-1">
                    <h4>Feeds:</h4>
                     {/* Displays feed data from whichever feeds return data from the given location (a room might have more than one sensor) */}
                    {
                      device && device.payload.temperatures.filter(item => item.location === selectedRoom).map((item, index) => (
                        <div className={`grid grid-cols-12 m-0 rounded text-sm ${background(index)}`} key={index}>
                        <div className="pr-1 col-span-4"><DeviceStatus device={device} /></div>
                        <h2 className="pr-1 col-span-2 pt-2">{item.name}</h2>
                        <h4 className="pr-1 col-span-3 pt-2">{item.location}</h4>
                        <h4 className="pr-1 col-span-3 pt-2">{Math.floor(item.temp)} °C</h4>
                        </div>
                      ))
                    }
                </div>
  )
}

export default FeedDisplaySm