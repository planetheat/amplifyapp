import React from 'react'
import {MdSensors} from 'react-icons/md'


const DeviceStatus = ({device}) => {

    const epochCompare = (epoch) => {
        const now = Date.now()
        const formattedNow = Math.floor(now / 1000)
        const parsedEpoch = parseInt(epoch)
        // The value 5000 here is subject to change once we determine exactly how often the db updates with a new feed object
        // 3600 = 1 hr. In dev the diff between 'now' and the most recent feed update found was 4540 (miliseconds)
        if(formattedNow - parsedEpoch > 5000){
            return false
        }else{
            return true
        }
    }
    return (
        <div className="flex pl-2 bg-white m-2 rounded">
        {epochCompare(device && device.payload.epoch) ?  <MdSensors style={{color: "lime"}} className="col-span-1"/> :  <MdSensors style={{color: "red"}} className="col-span-1"/>}
        {epochCompare(device && device.payload.epoch) ? <p className="bg-blue-200 col-span-3 pl-2">Active</p> : <p className="bg-grey-500 pl-2">Inactive</p>}
        </div> 
    )
}

export default DeviceStatus
