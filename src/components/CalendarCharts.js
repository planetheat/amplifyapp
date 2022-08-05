import React, {useState, useEffect} from 'react'
import RoomChart from './charts/RoomChart'
import moment from 'moment'


const CalendarCharts = ({filteredDevices, value}) => {

    const [data, setData] = useState([])
    const [dates, setDates] = useState([]) 


       useEffect(()=>{
        const dataHandler = () => {
            let rooms = [];
            for(let i = 0; i < filteredDevices[0].payload.temperatures.length; i++){
                const room = filteredDevices.map(r => r.payload.temperatures[i].temp)
                console.log(room)
                rooms.push(room)
            }
            console.log(rooms)
            setData(rooms)
            setDates(filteredDevices.map(d => moment.unix(parseInt(d.payload.epoch))))

        }
        dataHandler()
    },[filteredDevices, setData])
  
    return (
    <>
     {/* <h4 className="text-white sm:mx-12">Charts for room temperatures on {moment(value).format("MMM Do YYYY")} </h4> */}
     <div className={`h-full pb-36 px-0 sm:mx-0 rounded transition-all duration-500 easy`}>
             {data && data.map((r, i)=>(
                    <div key={i}>
                        <RoomChart props={r} labels={dates} selectedRoom={filteredDevices[0].payload.temperatures[i].location}/>
                        {/* <h4 className="text-white">{filteredDevices[0].payload.temperatures[i].location}</h4> */}
                    </div>
                ))}
    </div>
    </>
  )
}

export default CalendarCharts