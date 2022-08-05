import React, { useEffect, useState } from 'react'

const FeedPicker = ({devices, setSelectedFeeds}) => {
    
    const [feedPicker, setFeedPicker] = useState()

    useEffect(()=> {
        setFeedPicker(
            devices.map((d, i) =>{
                const newObj = {}
                newObj['name'] = d
                newObj['clicked'] = false
                return newObj
            })
        )
    },[devices])

    const handleChange = (index) => {
        let updatedArray = [...feedPicker]
        updatedArray[index].clicked = !feedPicker[index].clicked
        setFeedPicker(updatedArray)
        setSelectedFeeds(feedPicker)
    }

    if(!devices) return <div>Loading...</div>
  return (
    <section className="">
        <div className="grid grid-cols-3 gap-2 justify-left bg-indigo-800 rounded p-0 mt-4">

            {
                devices && devices.map((device, index)=> (
                    <div className="form-check p-1 w-18 h-8 flex bg-indigo-600 rounded" key={index}>
                        {/* {console.log(feedPicker[index])} */}
                        {/* DONT USE INDEX TO SELECT ITEM, USE ID */}
                    <input className=" h-4 w-4 border border-gray-300 rounded bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="" id="flexCheckDefault" onChange={()=>handleChange(index)} />
                     <label className="form-check-label inline-block text-white text-sm" htmlFor="flexCheckChecked">
                    {device}
                    </label>
    </div>
                ))
            }
        </div>

    </section>
  )
}

export default FeedPicker