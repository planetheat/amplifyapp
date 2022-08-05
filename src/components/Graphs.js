import React, {useState, useEffect} from 'react'
import DashBoardNav from './DashBoardNav'
import ToolBar from './ToolBar'
import { API } from 'aws-amplify'
import { listThreeHundreds } from '../graphql/queries'
// import { listSixties } from '../graphql/queries'
import FeedPicker from './FeedPicker'
import TimeIncrementer from './TimeIncrementer'
import TimeZoom from './TimeZoom'
import GraphsContainer from './GraphsContainer'

const Graphs = ({user}) => {
   
    // const fiveDayTimeframe = 432000;
    const tenDayTimeframe = 864000;
    // const twoWeekTimeFrame = 1209600;

    const [sortedThreeHundreds, setSortedThreeHundreds] = useState(null)
    const [feedIDs, setFeedIDs] = useState([])
    const [selectedFeeds, setSelectedFeeds] = useState(null)

    // const mostRecentEpoch = sortedThreeHundreds && sortedThreeHundreds[-1].payload.epoch
    // console.log(mostRecentEpoch)

    
    // Epoch value for user's 'now'
    // const now = Date.now() 
    const now2 = Math.floor((Date.now() / 1000))

    const [mostRecentEpoch, setMostRecentEpoch] = useState(now2)

    // top level timeframe : this is the time from the user's 'now' back 5 days or 2 weeks.
    // it's essentially the earliest date point that will be returned / shown.
    // const [timeframe] = useState(Math.floor( now / 1000 - twoWeekTimeFrame ))
   
    // this is the time window for displaying data. It's the amount the epoch is adjusted by when a user presses the increment or decrement time button
    // const [timeQuantity, setTimeQuantity] = useState(Math.floor( now / 1000 - tenDayTimeframe ))
    
    const compare = (a, b) => {
        if( a.payload.epoch < b.payload.epoch){
            return -1;
        }
        if( a.payload.epoch > b.payload.epoch){
            return 1
        }
        return 0;
    }

    // Creates a list of named feeds with a boolean for each (show / don't show) from an instance of the temperatures array on one item from listThreeHundreds
    const feedToObj = (arr) => {
        let obj = []
        for (let i = 0; i < arr.length; i++){
            obj[i] = {
                name: arr[i].location,
                selected: false
            }
        }
        return obj
    }

    // Queries graphql for 300 second cycle feed objects (room temperatures)
    useEffect(()=> {
        const fetchDevices = async () => {
            const apiData = await API.graphql({ 
                query: listThreeHundreds, 
                authMode: "API_KEY",
                variables: {filter: {cust_ID: {contains: user.attributes.sub}}, limit: 2016}});
            const arrLength = apiData && apiData.data.listThreeHundreds.items.length
            setSortedThreeHundreds(apiData.data.listThreeHundreds.items.sort(compare))
            // setTest(apiData.data.listThreeHundreds.items.sort(compare).filter(t => t.payload.epoch > timeframe))
            setFeedIDs(apiData.data.listThreeHundreds.items[arrLength-1].payload.temperatures.map(t => t.location))   
            setSelectedFeeds(feedToObj(apiData.data.listThreeHundreds.items.sort(compare)[0].payload.temperatures))
            setMostRecentEpoch(apiData.data.listThreeHundreds.items.sort(compare)[arrLength-1].payload.epoch)
            console.log(apiData.data.listThreeHundreds.items.sort(compare)[arrLength-1].payload.epoch)   
        }
        fetchDevices();
    },[user])

    const [filteredDevices, setFilteredDevices] = useState()

    console.log(sortedThreeHundreds && sortedThreeHundreds)

    // Epochs are points in time
    // to make this code simpler we need to think in terms of 2 points in time
    // Increment moves the two points down or up by the same amount (each bracket shifts by the same amount of time)
    // Zoom in moves the 'upper' point back in time and the 'lower' point forward in time and vice versa to zoom out
    // Use effect filters for all values between the two points
    // So we set two variables: upper and lower
    // They start out relative to date now: the upper value is == date now, the lower is date now - timeframe (a stepped value which can be set relative to a user type or status)
    // Increment / Decrement sets the variables subtracting from both or adding to both by the same amount (day / hour)
    // Zoom in / out sets the variables subtracting from one and adding to the other by the same amount

    // set two points in time 
    const [upper, setUpper] = useState(mostRecentEpoch)
    const [lower, setLower] = useState(mostRecentEpoch - tenDayTimeframe)

    useEffect(()=> {

        //  code is currently finding no data that meet the criteria of 'recent' because
        //  the feed has dropped out. 
        const filterLowerRange = (arr) => {
            console.log("lower",lower)
            return arr && arr.filter((item) => item.payload.epoch > lower)
        }
    
        const filterUpperRange = (arr) => {
            console.log("upper",upper)
            return arr && arr.filter((item)=> item.payload.epoch < upper)
        }
        const returnNoEmptyArrays = (arr) => {
            if (arr && arr.length === 0){
                return [
                    {
                        id: "111111",
                        payload: {
                            access_type: "",
                            cust_ID: "null",
                            epoch: 111111111111,
                            interval: 0,
                            live_until: 111111111111,
                            temperatures: [
                                {
                                    location: "none",
                                    name: "none",
                                    temp: 0
                                }
                            ]
                        }
                    }
                ]
            }else{
                return arr
            }
        }
        let result = sortedThreeHundreds && sortedThreeHundreds
        console.log(result)
        result = filterLowerRange(result)
        console.log(result)
        result = filterUpperRange(result)
        result = returnNoEmptyArrays(result)
        console.log(result)
        setFilteredDevices(result)
    }, [sortedThreeHundreds, upper, lower])


    if(!sortedThreeHundreds) return <div>Loading...</div>
    return (
        <main className="bg-indigo-900 p-0">
            <DashBoardNav />
            <div className="relative fixed w-full min-h-screen inset-0 sm:grid sm:grid-cols-1 sm:pl-48 sm:pr-12">
            <div className="p-2 pt-8 sm:h-auto bg-indigo-800 mx-8 mt-12 rounded overflow-y-auto h-full">
                 {sortedThreeHundreds && selectedFeeds ? <GraphsContainer filteredDevices={filteredDevices} selectedFeeds={selectedFeeds}/>: null}
                <div className="sm:mx-24">
                <TimeIncrementer  lower={lower} upper={upper} setUpper={setUpper} setLower={setLower}/>
                <TimeZoom setLower={setLower} setUpper={setUpper} upper={upper} lower={lower} now2={now2}/>
                <FeedPicker devices={feedIDs} setSelectedFeeds={setSelectedFeeds}/>
                </div>
            </div>
                <ToolBar />
            </div>
        </main>
    )
}

export default Graphs
