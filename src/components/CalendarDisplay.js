import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
// import Moment from 'react-moment';
// import DateCard from './DateCard'
import CalendarCharts from './CalendarCharts'
import DateCardContainer from './DateCardContainer'

const CalendarDisplay = ({sortedThreeHundreds}) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const [filteredDevices, setFilteredDevices ]  = useState([])
    const [value, onChange] = useState();

    const handleClick = () => {
        setIsExpanded(!isExpanded)
        // setHeight(!isExpanded ? "h-80": "h-48")
    }

    useEffect(()=> {
        const clickDate = moment(value).valueOf() 
        // filter where device_data.epoch is above the lower threshold of dates
        // and
        // where device_data.epoch is lower than the upper threshold of dates.
        // Note 12 hours = 43200 seconds (* 1000 to match format of new Date)
        // Value of 43200000 can be stored in a variable and altered by user to expand or contract the relevant timeframe
        setFilteredDevices(sortedThreeHundreds.filter((device) => (1000 * parseInt(device.payload.epoch)) > clickDate - 43200000 && (1000 * parseInt(device.payload.epoch)) < clickDate + 43200000))
    },[sortedThreeHundreds,value])

    console.log(value)
    return (
        <main className="bg-indigo-900 min-h-screen pb-12">
          
          {/* UI */}
        <div className="pt-8 pb-4 bg-indigo-800 flex mx-4 mb-2 rounded">
            <button 
            className="ml-4 sm:ml-8 border border-white 
            bg-yellow-400 hover:bg-yellow-300 hover:shadow-lg  
            focus:shadow-lg focus:outline-none focus:ring-0 
            rounded border-2 text-gray-800 px-2 w-36 mb-2 
            sm:mb-0 transition duration-150 ease-in-out" 
            data-bs-toggle="modal" onClick={handleClick}>{isExpanded? "Close Calendar" : "Pick a date..."}</button> 
             
             <h4 className="text-white sm:mx-12">Charts for room temperatures on {moment(value).format("MMM Do YYYY")} </h4>
           

         

            {/* Modal */}
            <div className={`${isExpanded ? "" : "hidden"} modal fade fixed w-full sm:mx-56 sm:w-96 h-full outline-none overflow-x-hidden overflow-y-auto`}
                id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div className="modal-dialog relative w-auto pointer-events-none">
                     <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-0 border-b border-gray-200 rounded-t-md">
                             {/* <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5> */}
                             <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close">
                             </button>
                        </div>
                    <div className="modal-body relative p-4">
                  <Calendar onChange={onChange} value={value} />
                </div>
                {
                    value && filteredDevices.length === 0 ? <div className="p-8"><h3 className="text-sm">No data for this period. Please try another date or check your device status.</h3></div> : null
                }
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal" onClick={handleClick}>Close</button>
      </div>
    </div>
    
  </div>
  
</div>


        
        </div>

       

        {/* Data */}
        <section className="sm:flex mt-0 pb-0">
            {/* Charts */}
           
            <div className={` overflow-y-auto pb-2 pt-1 px-2 rounded transition-all duration-500 easy sm:mt-0 sm:pb-4 h-96 sm:h-96 sm:w-full sm:mx-4 sm:border sm:border-pink-500 bg-indigo-800`}>
                {
                    filteredDevices.length > 0 ? <CalendarCharts filteredDevices={filteredDevices} value={value}/>: null
                }
            
            </div>
            {/* DateCards */}
            <div className=" overflow-y-auto pb-2 pt-1 px-2 rounded transition-all duration-500 easy sm:mt-0 sm:h-96 sm:w-full sm:border  sm:mx-4 sm:border-pink-500 bg-indigo-800">
            {
                filteredDevices.length > 0 ? <DateCardContainer filteredDevices={filteredDevices} isExpanded={isExpanded} /> : null
            }
            </div>
          

        </section>
        </main>
    )
}

export default CalendarDisplay
