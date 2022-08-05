import React, {useState, useEffect} from 'react'
import RoomGrid from './RoomGrid'
import SummaryLineChart from './charts/SummaryLineChart'
import FeedList from './FeedList'
import EnergyDisplay from './EnergyDisplay'
import {NavLink} from 'react-router-dom'
import DeviceStatus from './DeviceStatus'
// import PriceNow from './PriceNow'
import { API } from 'aws-amplify'
// import { listDevices } from '../graphql/queries'
import { listThreeHundreds } from '../graphql/queries'

const Summary = ({user}) => {

    // state
    const [ threeHundreds, setThreeHundreds] = useState()
    const [threeHundredFeedDevice, setThreeHundredFeedDevice] = useState()

    // get length of data array to use to retrieve most recent item
    const arrLength = threeHundreds && threeHundreds.length
    // query for data from the feed cycling at 300 seconds
    useEffect(()=> {
        const fetch300s = async () => {
            // fix filter expression!
            const apiData = await API.graphql({ 
                query: listThreeHundreds,
                authMode: "API_KEY",
                variables: {filter: {cust_ID: {contains: user.attributes.sub}}, limit: 2016} 
            });
            
            setThreeHundreds(apiData.data.listThreeHundreds.items.sort(compare))
            setThreeHundredFeedDevice(apiData.data.listThreeHundreds.items.sort(compare)[arrLength -1])
        }
        fetch300s();
    },[arrLength, user])

    console.log(threeHundreds)

    // Function for sorting feed data by id (which is an epoch string -> sort by chronology)
    const compare = (a, b) => {
        if( a.id < b.id){
            return -1;
        }
        if( a.id > b.id){
            return 1
        }
        return 0;
    }

    // this function allows the re-use of RoomGrid component in this context. 
    // It has no implicit use in this component except stopping errors. Find a better solution.  
    const handleSelect = (e) => {
        console.log(e)
    }

    return (
        <div className="pt-8 sm:pt-10 sm:flex-1 sm:pl-48 sm:pt-16 sm:pr-12 overflow-auto">
            <div className="">
                <h2 className="font-bold text-white text-center">Summary</h2>
            <NavLink to="/graphs">
                <SummaryLineChart feed={threeHundreds} arrLength={arrLength}/>
            </NavLink>
            
            <NavLink to={"/rooms"} >
            <RoomGrid props={threeHundredFeedDevice} handleSelect={handleSelect}/>
            </NavLink>

            </div>
            <h4 className="font-bold pl-2 text-white">Device Status:</h4>
            <DeviceStatus device={threeHundredFeedDevice}/> 
            <div className="grid grid-cols-5 px-2 gap-2 bg-indigo-900">
                <FeedList device={threeHundredFeedDevice}/>  
                <EnergyDisplay user={user}/>
                  
            </div>
            <NavLink to="/pricing">
            {/* <PriceNow /> */}
            </NavLink>
            {/* <div>
                <EnergyDisplay />
            </div> */}
        </div>
    )
}

export default Summary
