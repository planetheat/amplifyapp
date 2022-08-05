import React, {useState, useEffect} from 'react'
import RoomGrid from './RoomGrid'
import ToolBar from './ToolBar'
import DashBoardNav from './DashBoardNav'
import RoomDisplay from './RoomDisplay'
import { API } from 'aws-amplify'
// import { listDevices } from '../graphql/queries'
import { listThreeHundreds } from '../graphql/queries'
import moment from 'moment'

const Rooms = ({user}) => {
    
    // get selected room from onClick in RoomGrid? 
    const [selectedRoom, setSelectedRoom] = useState("Living Room")

    const [labels, setLabels] = useState([])
    const [sortedDevices, setSortedDevices] = useState([])
    const [singleDevice, setSingleDevice] = useState({
        payload: {
            T1: 0,
            T2: 0,
            T3: 0,
            T4: 0,
            heat1: 0,
            heat2: 0,
            energy1: 0,
            energy2: 0,
            temperatures: [{temp: 0, location: ''},{temp: 0, location: ''}],
        }
    })

    const [filteredDevices, setFilteredDevices] = useState([])

    const compare = (a, b) => {
        if( a.id < b.id){
            return -1;
        }
        if( a.id > b.id){
            return 1
        }
        return 0;
    }

    const [rooms, setRooms] = useState([{location: ''},{location: ''}, {location: ''}])

    useEffect(() => {
        const fetchDevices = async () => {
            const apiData = await API.graphql({ 
                query: listThreeHundreds, 
                authMode: "API_KEY",
                variables: {filter: {cust_ID: {contains: user.attributes.sub}}}, limit: 2016 });
            const arrLength = apiData && apiData.data.listThreeHundreds.items.length
            // Sets the most recent data object retrueved to singleDevice
            console.log(arrLength)
            setSingleDevice(apiData.data.listThreeHundreds.items.sort(compare)[arrLength -1])
            // Sets sorted list of data objects to sortedDevices
            setSortedDevices(apiData.data.listThreeHundreds.items.sort(compare))
            // Sets sorted list of data objects to filteredDevices to pass to room grid for filtering. 
            setFilteredDevices(apiData.data.listThreeHundreds.items.sort(compare))
            // 
            console.log(apiData.data.listThreeHundreds.items.sort(compare)[arrLength -1])
            console.log("sorted and compared",apiData.data.listThreeHundreds.items.sort(compare))
            setRooms(apiData.data.listThreeHundreds.items.sort(compare)[arrLength -1].payload.temperatures.filter(t => t.location))
        }
        fetchDevices();
    },[user])

    console.log(rooms)
    useEffect(()=> {
        setSelectedRoom(rooms[0].location)
    },[rooms])
  
    useEffect(()=>{
        const filter = () => {
            setLabels(sortedDevices.map(l => moment.unix(parseInt(l.payload.epoch))))
            const filtered = sortedDevices.map(d => d.payload.temperatures.filter(t => t.location === selectedRoom))
            console.log(filtered)
            const collapsed = filtered.map(f => f[0]? f[0].temp : null)
            // setTest(filtered.map(f => f[0].temp))
            setFilteredDevices(collapsed)
        }
        filter()
    },[selectedRoom, sortedDevices])


    // function passed down component tree to share selected room throughout feature.
    const handleSelect = (e) => {
        setSelectedRoom(e)
    }

    return (
        <div className="bg-indigo-900 p-0">
            <div className="relative fixed w-full min-h-screen inset-0">
            <DashBoardNav />
            <div className="sm:pl-36 sm:pt-8 sm:flex sm:flex-col-reverse">
            <RoomDisplay selectedRoom={selectedRoom} filteredDevices={filteredDevices} labels={labels} singleDevice={singleDevice}/>
            {/* <h4 className="text-white pl-2">Select Room</h4> */}
            <RoomGrid props={singleDevice} handleSelect={handleSelect}/>
            <ToolBar />
            </div>
            </div>
        </div>
    )
}

export default Rooms
