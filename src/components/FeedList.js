import React from 'react'

const FeedList = ({device}) => {

    // const epochCompare = (epoch) => {
    //     const now = Date.now()
    //     const formattedNow = Math.floor(now / 1000)
    //     const parsedEpoch = parseInt(epoch)
    //     // The value 5000 here is subject to change once we determine exactly how often the db updates with a new feed object
    //     // 3600 = 1 hr. In dev the diff between 'now' and the most recent feed update found was 4540 (miliseconds)
    //     if(formattedNow - parsedEpoch > 5000){
    //         return false
    //     }else{
    //         return true
    //     }
    // }

    const background = (index) => {
        if(index % 2 === 1){
            return "bg-gray-300"
        }else{
            return "bg-gray-400"
        }
    }
    

    if(!device) return <div>Loading...</div>
    return (
        <div className="bg-white border border-white text-sm p-1 col-span-3 rounded">
            <h2 className="font-bold">Room Temperature Feed</h2>
        <div className="h-32 overflow-y-auto sm:h-auto ">
                <div className="m-0 rounded ">
                    {/* <h2 className="font-bold">Feeds:</h2> */}
                    {device && device.payload.temperatures.map((item, index)=> (
                         <div key={index} className={`flex justify-between ${background(index)}`}>
                         <h2 className="font-bold pr-4 col-span-1">{item.location}</h2>
                         <h4 className="pr-4 col-span-2">{Math.floor(item.temp)} °C</h4>
                         </div>
                    ))}
                </div>
        </div>
        </div>
    )
}

export default FeedList
