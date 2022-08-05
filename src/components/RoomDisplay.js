import React from 'react'
import RoomChart from './charts/RoomChart'
// import ReportSm from './ReportSm'
import FeedDisplaySm from './FeedDisplaySm'

const RoomDisplay = ({selectedRoom, filteredDevices, labels, singleDevice}) => {

    return (
        
        <div className="container p-2 bg-indigo-900 pt-10 mt-4 sm:pt-0">   
            {/* <div className="bg-indigo-900 p-0 container mx-auto">
                <h2 className="text-sm text-white py-2">{selectedRoom}</h2> 
            </div> */}
            <RoomChart props={filteredDevices} labels={labels} selectedRoom={selectedRoom}/>
            {/* Contains a chart for a given room and a display of feeds (w temps) */}
            <div className="sm:mx-12 sm:mt-4">
                <FeedDisplaySm device={singleDevice} selectedRoom={selectedRoom}/>
                
                {/* <ReportSm /> */}
            </div>
        </div>
    )
}

export default RoomDisplay
