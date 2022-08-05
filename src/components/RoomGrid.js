import React, {useState, useEffect} from 'react'
import Room from './Room'
// import {FaAngleRight} from 'react-icons/fa'

const RoomGrid = ({props, handleSelect}) => {

    const [ rooms, setRooms ] = useState([
        {
            name: "Living Room",
            temp: 0.0,
        },
        {
            name: "Kitchen",
            temp: 0.0,
        },
        {
            name: "Hall",
            temp: 0.0,
        },
        {
            name: "Bedroom 1",
            temp: 0.0,
        },
        {
            name: "Bedroom 2",
            temp: 0.0,
        },
        {
            name: "Bathroom",
            temp: 0.0,
        },
    ])

    useEffect(() => {
        const filteredArray = props && props.payload.temperatures.filter(t => t.location)
        setRooms(filteredArray)
    },[props])

    const numRooms = rooms && rooms.length
    
    if(!props) return <div>Loading...</div>
    return (
        <main className="p-0 bg-indigo-900 sm:pt-8">
            
            <section className="">
                {/* <h4 className="text-white pl-2">Select Room</h4> */}
                <div className="flex sm:mx-12">
                <div className={`grid grid-cols-3 gap-2 sm:gap-4 p-2 justify-items-center  sm:justify-items-start sm:grid-rows-1 sm:grid-cols-${numRooms} `}>
                    {
                        rooms && rooms.map((room, index) => (
                            <Room props={room} handleSelect={handleSelect} key={index}/>
                        ))
                    }
                    
                </div>
                {/* <div className="pt-8">
                    <FaAngleRight style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                </div> */}
                </div>
            </section>
        </main>
    )
}

export default RoomGrid
